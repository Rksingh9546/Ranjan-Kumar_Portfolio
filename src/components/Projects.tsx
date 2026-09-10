import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  FolderGit2,
  Github,
  Sparkles,
  CheckCircle,
  Play,
  Plus,
  Pencil,
  Trash2,
  X,
  Save,
  Upload,
  ExternalLink,
  CalendarDays,
} from 'lucide-react';

import { PROJECTS } from '../data/portfolioData';
import { ThemeMode, Project } from '../types';

interface ProjectsProps {
  theme: ThemeMode;
  onSelectProjectForDemo: (project: Project) => void;
}

/*
 * Extra fields used by the project manager.
 * These are optional, so your existing Project type does not
 * need to be completely replaced.
 */
type ManagedProject = Project & {
  date?: string;
  liveDemoUrl?: string;
};

interface ProjectForm {
  title: string;
  subtitle: string;
  category: string;
  description: string;
  image: string;
  date: string;
  metrics: string;
  githubUrl: string;
  liveDemoUrl: string;
  tags: string;
  features: string;
}

const STORAGE_KEY = 'ranjan_portfolio_projects';

const emptyForm: ProjectForm = {
  title: '',
  subtitle: '',
  category: 'AI & ML',
  description: '',
  image: '',
  date: '',
  metrics: '',
  githubUrl: '',
  liveDemoUrl: '',
  tags: '',
  features: '',
};

const parseList = (value: string): string[] =>
  value
    .split(/\n|,/)
    .map((item) => item.trim())
    .filter(Boolean);

export default function Projects({
  theme,
  onSelectProjectForDemo,
}: ProjectsProps) {
  const isWarm = theme === 'warm';

  const [projects, setProjects] = useState<ManagedProject[]>(
    () => PROJECTS.map((project) => ({ ...project })) as ManagedProject[]
  );

  const [activeCategory, setActiveCategory] = useState<string>('All');

  const [isManagerOpen, setIsManagerOpen] = useState(false);
  const [editingProjectId, setEditingProjectId] = useState<string | null>(null);

  const [form, setForm] = useState<ProjectForm>(emptyForm);

  /*
   * Load projects saved in browser.
   */
  useEffect(() => {
    try {
      const savedProjects = localStorage.getItem(STORAGE_KEY);

      if (savedProjects) {
        const parsed = JSON.parse(savedProjects);

        if (Array.isArray(parsed)) {
          setProjects(parsed);
        }
      }
    } catch (error) {
      console.error('Unable to load saved projects:', error);
    }
  }, []);

  /*
   * Save projects whenever they change.
   */
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
    } catch (error) {
      console.error('Unable to save projects:', error);
    }
  }, [projects]);

  /*
   * Dynamic categories.
   * Any category added from the form automatically appears
   * in the filter buttons.
   */
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(
      new Set(projects.map((project) => project.category).filter(Boolean))
    );

    return ['All', ...uniqueCategories];
  }, [projects]);

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  /*
   * Open Add Project modal.
   */
  const handleAddProject = () => {
    setEditingProjectId(null);
    setForm(emptyForm);
    setIsManagerOpen(true);
  };

  /*
   * Open Edit Project modal.
   */
  const handleEditProject = (project: ManagedProject) => {
    setEditingProjectId(project.id);

    setForm({
      title: project.title || '',
      subtitle: project.subtitle || '',
      category: project.category || 'AI & ML',
      description: project.description || '',
      image: project.image || '',
      date: project.date || '',
      metrics: project.metrics || '',
      githubUrl: project.githubUrl || '',
      liveDemoUrl: project.liveDemoUrl || '',
      tags: project.tags?.join(', ') || '',
      features: project.features?.join('\n') || '',
    });

    setIsManagerOpen(true);
  };

  /*
   * Delete Project.
   */
  const handleDeleteProject = (projectId: string) => {
    const confirmed = window.confirm(
      'Are you sure you want to delete this project?'
    );

    if (!confirmed) return;

    setProjects((currentProjects) =>
      currentProjects.filter((project) => project.id !== projectId)
    );
  };

  /*
   * Handle image upload.
   *
   * The image is converted to Base64 so it can be saved
   * inside localStorage.
   */
  const handleImageUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith('image/')) {
      window.alert('Please select a valid image file.');
      return;
    }

    /*
     * Keep localStorage reasonably small.
     */
    if (file.size > 2 * 1024 * 1024) {
      window.alert(
        'Please choose an image smaller than 2MB.'
      );
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      setForm((currentForm) => ({
        ...currentForm,
        image: String(reader.result),
      }));
    };

    reader.readAsDataURL(file);
  };

  /*
   * Save Add/Edit form.
   */
  const handleSaveProject = (event: React.FormEvent) => {
    event.preventDefault();

    if (!form.title.trim()) {
      window.alert('Project name is required.');
      return;
    }

    if (!form.description.trim()) {
      window.alert('Project description is required.');
      return;
    }

    if (!form.image.trim()) {
      window.alert('Please add a project image.');
      return;
    }

    const projectData: ManagedProject = {
      id:
        editingProjectId ||
        `project-${Date.now()}-${Math.random()
          .toString(36)
          .substring(2, 8)}`,

      title: form.title.trim(),

      subtitle:
        form.subtitle.trim() ||
        form.category.trim() ||
        'Project',

      category:
        form.category.trim() ||
        'Other',

      description: form.description.trim(),

      image: form.image.trim(),

      date: form.date.trim(),

      metrics: form.metrics.trim(),

      githubUrl: form.githubUrl.trim(),

      liveDemoUrl: form.liveDemoUrl.trim(),

      tags: parseList(form.tags),

      features: parseList(form.features),
    };

    if (editingProjectId) {
      setProjects((currentProjects) =>
        currentProjects.map((project) =>
          project.id === editingProjectId
            ? projectData
            : project
        )
      );
    } else {
      setProjects((currentProjects) => [
        projectData,
        ...currentProjects,
      ]);
    }

    setIsManagerOpen(false);
    setEditingProjectId(null);
    setForm(emptyForm);
  };

  /*
   * Form field helper.
   */
  const updateForm = (
    field: keyof ProjectForm,
    value: string
  ) => {
    setForm((currentForm) => ({
      ...currentForm,
      [field]: value,
    }));
  };

  /*
   * Common input classes.
   */
  const inputClass = `w-full rounded-xl px-4 py-3 text-sm outline-none transition-all border ${
    isWarm
      ? 'bg-white text-slate-900 border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20'
      : 'bg-slate-950 text-white border-slate-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20'
  }`;

  const labelClass = `block text-xs font-bold uppercase tracking-wider mb-2 ${
    isWarm ? 'text-slate-700' : 'text-slate-300'
  }`;

  return (
    <>
      <section
        id="projects"
        className="py-20 lg:py-28 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* =========================
              SECTION HEADER
          ========================== */}
          <div className="text-center max-w-3xl mx-auto mb-10">

            <div
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 ${
                isWarm
                  ? 'bg-orange-100 text-orange-700 border border-orange-200'
                  : 'bg-cyan-950/60 text-cyan-300 border border-cyan-500/30'
              }`}
            >
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Featured Engineering Work</span>
            </div>

            <h2
              className={`text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 ${
                isWarm
                  ? 'text-slate-900'
                  : 'text-white'
              }`}
            >
              Highlighted Systems &amp; Applications
            </h2>

            <p
              className={`text-base sm:text-lg leading-relaxed ${
                isWarm
                  ? 'text-slate-600'
                  : 'text-slate-300'
              }`}
            >
              Explore my AI, full-stack, healthcare, and web
              development projects.
            </p>
          </div>

          {/* =========================
              ADD PROJECT BUTTON
          ========================== */}
          <div className="flex justify-center mb-8">
            <button
              type="button"
              onClick={handleAddProject}
              id="add-project-btn"
              className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold transition-all ${
                isWarm
                  ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/20'
                  : 'bg-cyan-400 hover:bg-cyan-300 text-slate-950 shadow-lg shadow-cyan-500/20'
              }`}
            >
              <Plus className="w-4 h-4" />
              Add New Project
            </button>
          </div>

          {/* =========================
              FILTER TABS
          ========================== */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;

              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  id={`project-filter-${cat
                    .toLowerCase()
                    .replace(/[^a-z0-9]/g, '-')}`}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? isWarm
                        ? 'bg-orange-500 text-white shadow-md shadow-orange-500/30 scale-105'
                        : 'bg-cyan-400 text-slate-950 font-bold shadow-[0_0_15px_rgba(34,211,238,0.4)] scale-105'
                      : isWarm
                        ? 'bg-white text-slate-700 hover:bg-orange-50 hover:text-orange-600 border border-orange-200/80'
                        : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800 hover:text-cyan-300 border border-slate-700/80'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* =========================
              PROJECT GRID
          ========================== */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">

            <AnimatePresence mode="popLayout">

              {filteredProjects.map((project) => (

                <motion.article
                  key={project.id}
                  layout
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.95,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  id={`project-card-${project.id}`}
                  className={`group flex flex-col rounded-3xl overflow-hidden border transition-all duration-300 ${
                    isWarm
                      ? 'bg-white hover:border-orange-300/80 shadow-xl shadow-orange-950/5 hover:shadow-orange-950/10 border-orange-200/80 hover:-translate-y-1.5'
                      : 'bg-slate-900/90 hover:border-cyan-500/50 shadow-2xl border-slate-800 hover:-translate-y-1.5 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]'
                  }`}
                >

                  {/* =========================
                      IMAGE
                  ========================== */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950">

                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />

                    {/* Category */}
                    <div className="absolute top-4 left-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold backdrop-blur-md ${
                          isWarm
                            ? 'bg-white/95 text-orange-700 border border-orange-200/80 shadow-xs'
                            : 'bg-slate-950/80 text-cyan-300 border border-cyan-500/40'
                        }`}
                      >
                        {project.category}
                      </span>
                    </div>

                    {/* Date */}
                    {project.date && (
                      <div className="absolute top-4 right-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md flex items-center gap-1.5 ${
                            isWarm
                              ? 'bg-white/95 text-slate-700 border border-orange-200'
                              : 'bg-slate-950/85 text-slate-200 border border-slate-700'
                          }`}
                        >
                          <CalendarDays className="w-3.5 h-3.5" />
                          {project.date}
                        </span>
                      </div>
                    )}

                    {/* Metric */}
                    {project.metrics && (
                      <div className="absolute bottom-4 left-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md flex items-center gap-1.5 ${
                            isWarm
                              ? 'bg-slate-900/85 text-amber-300 border border-amber-400/30'
                              : 'bg-slate-900/90 text-cyan-200 border border-cyan-500/40'
                          }`}
                        >
                          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                          <span>{project.metrics}</span>
                        </span>
                      </div>
                    )}

                    {/* Interactive Demo */}
                    <button
                      type="button"
                      onClick={() =>
                        onSelectProjectForDemo(project)
                      }
                      className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-bold text-sm backdrop-blur-xs cursor-pointer"
                    >
                      <div className="px-4 py-2 rounded-full bg-orange-500 text-white flex items-center gap-2 shadow-lg shadow-orange-500/40 transform -translate-y-2 group-hover:translate-y-0 transition-transform">
                        <Play className="w-4 h-4 fill-white" />
                        <span>Launch Interactive Demo</span>
                      </div>
                    </button>
                  </div>

                  {/* =========================
                      CONTENT
                  ========================== */}
                  <div className="p-6 sm:p-8 flex flex-col flex-1">

                    <div className="mb-3">

                      <h3
                        className={`text-xl sm:text-2xl font-bold tracking-tight mb-1 group-hover:text-orange-500 transition-colors ${
                          isWarm
                            ? 'text-slate-900'
                            : 'text-white'
                        }`}
                      >
                        {project.title}
                      </h3>

                      <p
                        className={`text-xs font-semibold uppercase tracking-wider ${
                          isWarm
                            ? 'text-orange-600'
                            : 'text-cyan-400'
                        }`}
                      >
                        {project.subtitle}
                      </p>
                    </div>

                    <p
                      className={`text-sm leading-relaxed mb-5 ${
                        isWarm
                          ? 'text-slate-600'
                          : 'text-slate-300'
                      }`}
                    >
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-1.5 mb-6">

                      {project.features
                        ?.slice(0, 3)
                        .map((feature, index) => (
                          <div
                            key={`${project.id}-feature-${index}`}
                            className="flex items-start gap-2 text-xs"
                          >
                            <CheckCircle
                              className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${
                                isWarm
                                  ? 'text-orange-500'
                                  : 'text-cyan-400'
                              }`}
                            />

                            <span
                              className={
                                isWarm
                                  ? 'text-slate-700'
                                  : 'text-slate-300'
                              }
                            >
                              {feature}
                            </span>
                          </div>
                        ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1.5 mb-6 mt-auto">

                      {project.tags?.map((tag) => (
                        <span
                          key={`${project.id}-${tag}`}
                          className={`px-2.5 py-1 rounded-lg text-xs font-semibold ${
                            isWarm
                              ? 'bg-orange-50 text-slate-700 border border-orange-100'
                              : 'bg-slate-800 text-slate-300 border border-slate-700'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* =========================
                        ACTION BUTTONS
                    ========================== */}
                    <div
                      className={`pt-4 border-t flex flex-wrap items-center gap-2 ${
                        isWarm
                          ? 'border-orange-100/60'
                          : 'border-slate-800'
                      }`}
                    >

                      {/* Interactive Demo */}
                      <button
                        type="button"
                        onClick={() =>
                          onSelectProjectForDemo(project)
                        }
                        id={`project-demo-btn-${project.id}`}
                        className={`flex-1 min-w-[120px] flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                          isWarm
                            ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-sm shadow-orange-500/25'
                            : 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold shadow-sm'
                        }`}
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Live Demo</span>
                      </button>

                      {/* External Live Demo */}
                      {project.liveDemoUrl && (
                        <a
                          href={project.liveDemoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className={`flex-1 min-w-[120px] flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold border transition-all ${
                            isWarm
                              ? 'bg-white hover:bg-orange-50 text-slate-700 border-orange-200'
                              : 'bg-slate-800/80 hover:bg-slate-800 text-slate-200 border-slate-700'
                          }`}
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Website</span>
                        </a>
                      )}

                      {/* GitHub */}
                      {project.githubUrl && (
                        <a
                          href={"https://github.com/Rksingh9546"}
                          target="_blank"
                          rel="noreferrer"
                          id={`project-github-btn-${project.id}`}
                          className={`flex-1 min-w-[120px] flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold border transition-all ${
                            isWarm
                              ? 'bg-white hover:bg-orange-50 text-slate-700 border-orange-200'
                              : 'bg-slate-800/80 hover:bg-slate-800 text-slate-200 border-slate-700'
                          }`}
                        >
                          <Github className="w-4 h-4" />
                          <span>GitHub</span>
                        </a>
                      )}

                      {/* Edit */}
                      <button
                        type="button"
                        onClick={() =>
                          handleEditProject(project)
                        }
                        aria-label={`Edit ${project.title}`}
                        className={`p-2.5 rounded-xl border transition-all ${
                          isWarm
                            ? 'text-slate-600 border-orange-200 hover:bg-orange-50 hover:text-orange-600'
                            : 'text-slate-300 border-slate-700 hover:bg-slate-800 hover:text-cyan-300'
                        }`}
                      >
                        <Pencil className="w-4 h-4" />
                      </button>

                      {/* Delete */}
                      <button
                        type="button"
                        onClick={() =>
                          handleDeleteProject(project.id)
                        }
                        aria-label={`Delete ${project.title}`}
                        className={`p-2.5 rounded-xl border transition-all ${
                          isWarm
                            ? 'text-red-500 border-red-200 hover:bg-red-50'
                            : 'text-red-400 border-red-900/50 hover:bg-red-950/40'
                        }`}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>

                    </div>
                  </div>
                </motion.article>
              ))}

            </AnimatePresence>
          </div>

          {/* No Projects */}
          {filteredProjects.length === 0 && (
            <div
              className={`text-center py-16 rounded-3xl border border-dashed ${
                isWarm
                  ? 'border-orange-200 text-slate-500'
                  : 'border-slate-700 text-slate-400'
              }`}
            >
              <FolderGit2 className="w-10 h-10 mx-auto mb-3 opacity-50" />

              <p className="font-semibold mb-4">
                No projects found in this category.
              </p>

              <button
                type="button"
                onClick={handleAddProject}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold ${
                  isWarm
                    ? 'bg-orange-500 text-white'
                    : 'bg-cyan-400 text-slate-950'
                }`}
              >
                <Plus className="w-4 h-4" />
                Add Project
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ==================================================
          ADD / EDIT PROJECT MODAL
      ================================================== */}
      <AnimatePresence>
        {isManagerOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-950/75 backdrop-blur-md flex items-center justify-center p-4"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setIsManagerOpen(false);
              }
            }}
          >

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.96,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.96,
                y: 20,
              }}
              transition={{
                duration: 0.2,
              }}
              className={`w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl border shadow-2xl ${
                isWarm
                  ? 'bg-white border-orange-200'
                  : 'bg-slate-900 border-slate-700'
              }`}
            >

              {/* Modal Header */}
              <div
                className={`sticky top-0 z-10 flex items-center justify-between px-6 py-5 border-b backdrop-blur-xl ${
                  isWarm
                    ? 'bg-white/95 border-orange-100'
                    : 'bg-slate-900/95 border-slate-800'
                }`}
              >
                <div>
                  <h3
                    className={`text-xl font-bold ${
                      isWarm
                        ? 'text-slate-900'
                        : 'text-white'
                    }`}
                  >
                    {editingProjectId
                      ? 'Edit Project'
                      : 'Add New Project'}
                  </h3>

                  <p
                    className={`text-xs mt-1 ${
                      isWarm
                        ? 'text-slate-500'
                        : 'text-slate-400'
                    }`}
                  >
                    Add your project details below.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setIsManagerOpen(false)
                  }
                  className={`p-2 rounded-xl transition-colors ${
                    isWarm
                      ? 'hover:bg-orange-50 text-slate-600'
                      : 'hover:bg-slate-800 text-slate-300'
                  }`}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Form */}
              <form
                onSubmit={handleSaveProject}
                className="p-6 sm:p-8 space-y-6"
              >

                {/* Project Name + Date */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                  <div>
                    <label className={labelClass}>
                      Project Name *
                    </label>

                    <input
                      type="text"
                      value={form.title}
                      onChange={(event) =>
                        updateForm(
                          'title',
                          event.target.value
                        )
                      }
                      placeholder="  MindWatch AI"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>
                      Date
                    </label>

                    <input
                      type="text"
                      value={form.date}
                      onChange={(event) =>
                        updateForm(
                          'date',
                          event.target.value
                        )
                      }
                      placeholder=" "
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Subtitle + Category */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                  <div>
                    <label className={labelClass}>
                      Subtitle
                    </label>

                    <input
                      type="text"
                      value={form.subtitle}
                      onChange={(event) =>
                        updateForm(
                          'subtitle',
                          event.target.value
                        )
                      }
                      placeholder="AI-Based Mental Health Monitoring"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>
                      Category *
                    </label>

                    <input
                      type="text"
                      value={form.category}
                      onChange={(event) =>
                        updateForm(
                          'category',
                          event.target.value
                        )
                      }
                      placeholder="AI & ML"
                      className={inputClass}
                    />

                    <p
                      className={`text-[11px] mt-1 ${
                        isWarm
                          ? 'text-slate-500'
                          : 'text-slate-500'
                      }`}
                    >
                      You can create your own category.
                    </p>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label className={labelClass}>
                    Description *
                  </label>

                  <textarea
                    rows={4}
                    value={form.description}
                    onChange={(event) =>
                      updateForm(
                        'description',
                        event.target.value
                      )
                    }
                    placeholder="Describe what this project does..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {/* Image */}
                <div>
                  <label className={labelClass}>
                    Project Image *
                  </label>

                  <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4">

                    <input
                      type="text"
                      value={
                        form.image.startsWith('data:image')
                          ? ''
                          : form.image
                      }
                      onChange={(event) =>
                        updateForm(
                          'image',
                          event.target.value
                        )
                      }
                      placeholder="Image URL or upload an image"
                      className={inputClass}
                    />

                    <label
                      className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold cursor-pointer border transition-all ${
                        isWarm
                          ? 'border-orange-200 text-orange-600 hover:bg-orange-50'
                          : 'border-slate-700 text-cyan-300 hover:bg-slate-800'
                      }`}
                    >
                      <Upload className="w-4 h-4" />
                      Upload
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                    </label>
                  </div>

                  {form.image && (
                    <div className="mt-4 relative rounded-2xl overflow-hidden aspect-[16/7] bg-slate-950">
                      <img
                        src={form.image}
                        alt="Project preview"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>

                {/* Metrics */}
                <div>
                  <label className={labelClass}>
                    Highlight Metric
                  </label>

                  <input
                    type="text"
                    value={form.metrics}
                    onChange={(event) =>
                      updateForm(
                        'metrics',
                        event.target.value
                      )
                    }
                    placeholder=" 88.24% Accuracy"
                    className={inputClass}
                  />
                </div>

                {/* Tags */}
                <div>
                  <label className={labelClass}>
                    Tech Stack
                  </label>

                  <input
                    type="text"
                    value={form.tags}
                    onChange={(event) =>
                      updateForm(
                        'tags',
                        event.target.value
                      )
                    }
                    placeholder="React.js, Python, Flask, MySQL"
                    className={inputClass}
                  />

                  <p className="text-[11px] text-slate-500 mt-1">
                    Separate technologies using commas.
                  </p>
                </div>

                {/* Features */}
                <div>
                  <label className={labelClass}>
                    Project Features
                  </label>

                  <textarea
                    rows={5}
                    value={form.features}
                    onChange={(event) =>
                      updateForm(
                        'features',
                        event.target.value
                      )
                    }
                    placeholder={`

`}
                    className={`${inputClass} resize-none`}
                  />

                  <p className="text-[11px] text-slate-500 mt-1">
                    Write one feature per line.
                  </p>
                </div>

                {/* URLs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                  <div>
                    <label className={labelClass}>
                      GitHub URL
                    </label>

                    <input
                      type="url"
                      value={form.githubUrl}
                      onChange={(event) =>
                        updateForm(
                          'githubUrl',
                          event.target.value
                        )
                      }
                      placeholder="https://github.com/..."
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>
                      Live Demo URL
                    </label>

                    <input
                      type="url"
                      value={form.liveDemoUrl}
                      onChange={(event) =>
                        updateForm(
                          'liveDemoUrl',
                          event.target.value
                        )
                      }
                      placeholder="https://your-project.vercel.app"
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Form Actions */}
                <div
                  className={`flex flex-col-reverse sm:flex-row justify-end gap-3 pt-5 border-t ${
                    isWarm
                      ? 'border-orange-100'
                      : 'border-slate-800'
                  }`}
                >

                  <button
                    type="button"
                    onClick={() =>
                      setIsManagerOpen(false)
                    }
                    className={`px-5 py-3 rounded-xl text-sm font-bold border transition-all ${
                      isWarm
                        ? 'border-orange-200 text-slate-700 hover:bg-orange-50'
                        : 'border-slate-700 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className={`px-6 py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all ${
                      isWarm
                        ? 'bg-orange-500 hover:bg-orange-600 text-white'
                        : 'bg-cyan-400 hover:bg-cyan-300 text-slate-950'
                    }`}
                  >
                    <Save className="w-4 h-4" />

                    {editingProjectId
                      ? 'Update Project'
                      : 'Save Project'}
                  </button>

                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}