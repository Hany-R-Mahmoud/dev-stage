import React, { useState } from 'react';
import { Project, Profile, Language } from '../types';
import { 
  Plus, Trash2, Edit3, Eye, FileText, Check, Sparkles, 
  Save, ArrowLeft, Layers, UserCheck, Feather
} from 'lucide-react';

interface DashboardProps {
  projects: Project[];
  profile: Profile;
  language: Language;
  onSaveProjects: (projects: Project[]) => void;
  onSaveProfile: (profile: Profile) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({
  projects,
  profile,
  language,
  onSaveProjects,
  onSaveProfile,
}) => {
  const isAr = language === 'ar';

  const [activeTab, setActiveTab] = useState<'projects' | 'profile'>('projects');
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [savedNotification, setSavedNotification] = useState(false);

  // Form states for project
  const [projectForm, setProjectForm] = useState<Partial<Project>>({});
  
  // Profile state
  const [profileForm, setProfileForm] = useState<Profile>(profile);

  const handleStartEdit = (proj: Project) => {
    setEditingProject(proj);
    setProjectForm(proj);
    setIsCreating(false);
  };

  const handleStartCreate = () => {
    const newProj: Project = {
      id: `proj-${Date.now()}`,
      slug: `new-project-${Date.now()}`,
      title: { en: "New Portfolio Case Study", ar: "دراسة حالة جديدة" },
      description: { en: "A brief summary of this showcase project.", ar: "ملخص موجز لـ هذا المشروع" },
      meta: { en: "Design • Development", ar: "تصميم • تطوير" },
      category: "UI/UX",
      client: { en: "Client Name", ar: "اسم العميل" },
      role: { en: "Lead Designer", ar: "مصمم رئيسي" },
      year: new Date().getFullYear().toString(),
      imageSrc: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop",
      galleryImages: [],
      contentMDX: {
        en: "# Project Title\n\nWrite your MDX case study here.",
        ar: "# عنوان المشروع\n\nاكتب تفاصيل دراسة الحالة هنا."
      },
      isPublished: true,
      featured: true,
      tags: ["Design", "Web"]
    };

    setEditingProject(newProj);
    setProjectForm(newProj);
    setIsCreating(true);
  };

  const handleSaveProjectForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProject) return;

    const updatedProj = { ...editingProject, ...projectForm } as Project;

    let updatedList: Project[];
    if (isCreating) {
      updatedList = [updatedProj, ...projects];
    } else {
      updatedList = projects.map(p => p.id === updatedProj.id ? updatedProj : p);
    }

    onSaveProjects(updatedList);
    setEditingProject(null);
    triggerSaved();
  };

  const handleDeleteProject = (id: string) => {
    if (confirm(isAr ? 'هل أنت متأكد من حذف هذا المشروع؟' : 'Are you sure you want to delete this project?')) {
      const filtered = projects.filter(p => p.id !== id);
      onSaveProjects(filtered);
      triggerSaved();
    }
  };

  const handleTogglePublish = (id: string) => {
    const updated = projects.map(p => p.id === id ? { ...p, isPublished: !p.isPublished } : p);
    onSaveProjects(updated);
  };

  const handleToggleFeatured = (id: string) => {
    const updated = projects.map(p => p.id === id ? { ...p, featured: !p.featured } : p);
    onSaveProjects(updated);
  };

  const handleSaveProfileForm = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveProfile(profileForm);
    triggerSaved();
  };

  const triggerSaved = () => {
    setSavedNotification(true);
    setTimeout(() => setSavedNotification(false), 3000);
  };

  return (
    <main className="mx-auto max-w-[1600px] px-6 md:px-16 py-10 space-y-10 text-[#1A1A1A] dark:text-[#F4F2ED] font-sans-luxury" dir={isAr ? 'rtl' : 'ltr'}>
      
      {/* Toast Notification */}
      {savedNotification && (
        <div className="fixed bottom-24 ltr:right-8 rtl:left-8 z-50 flex items-center gap-3 bg-[#1A1A1A] dark:bg-[#F4F2ED] text-[#D4AF37] dark:text-[#0E0D0C] border-2 border-[#D4AF37] px-6 py-4 text-xs font-mono tracking-widest uppercase shadow-2xl md:bottom-8">
          <Check className="h-4 w-4" />
          <span>{isAr ? 'تم حفظ التغييرات بنجاح!' : 'CHANGES SAVED TO STUDIO ARCHIVE!'}</span>
        </div>
      )}

      {/* CMS Header Banner */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5 sm:gap-6 p-5 sm:p-8 bg-[#F9F8F6] dark:bg-[#141312] border-t-4 border-t-[#D4AF37] border-x border-b border-[#1A1A1A]/20 dark:border-white/15 shadow-[0_4px_24px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-colors duration-300">
        <div>
          <div className="flex items-center gap-2 text-[10px] sm:text-xs font-mono text-[#D4AF37] uppercase tracking-[0.2em] mb-1">
            <Feather className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            <span>EDITORIAL CONTENT MANAGEMENT</span>
          </div>
          <h1 className="font-serif-luxury text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1A1A] dark:text-[#F4F2ED]">
            {isAr ? 'استوديو إدارة المحتوى (Dev Stage)' : 'Dev Stage Editorial CMS Studio'}
          </h1>
          <p className="text-sm sm:text-base text-[#6C6863] dark:text-[#A39E98] mt-1 font-sans-luxury">
            {isAr 
              ? 'قم بإدارة مشاريعك، كتابة تفاصيل المعرض بـ MDX، وتحديث سيرتك الذاتية ثنائية اللغة.' 
              : 'Manage project showroom, curate MDX narratives, and refine bilingual profiles.'}
          </p>
        </div>

        {/* CMS Sub-tabs */}
        <div className="flex items-center gap-1.5 sm:gap-2 w-full md:w-auto bg-[#EBE5DE] dark:bg-[#181716] p-1.5 border border-[#1A1A1A]/20 dark:border-white/15">
          <button
            onClick={() => { setActiveTab('projects'); setEditingProject(null); }}
            className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-3 sm:px-5 py-2 text-[11px] sm:text-xs font-mono uppercase tracking-widest transition-colors duration-300 cursor-pointer ${
              activeTab === 'projects' ? 'bg-[#1A1A1A] dark:bg-[#F4F2ED] text-[#F9F8F6] dark:text-[#0E0D0C]' : 'text-[#6C6863] dark:text-[#A39E98] hover:text-[#1A1A1A] dark:hover:text-white'
            }`}
          >
            <Layers className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#D4AF37]" />
            <span>{isAr ? 'المشاريع' : 'WORKS'} ({projects.length})</span>
          </button>
          <button
            onClick={() => { setActiveTab('profile'); setEditingProject(null); }}
            className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-3 sm:px-5 py-2 text-[11px] sm:text-xs font-mono uppercase tracking-widest transition-colors duration-300 cursor-pointer ${
              activeTab === 'profile' ? 'bg-[#1A1A1A] dark:bg-[#F4F2ED] text-[#F9F8F6] dark:text-[#0E0D0C]' : 'text-[#6C6863] dark:text-[#A39E98] hover:text-[#1A1A1A] dark:hover:text-white'
            }`}
          >
            <UserCheck className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#D4AF37]" />
            <span>{isAr ? 'الملف الشخصي' : 'PROFILE'}</span>
          </button>
        </div>
      </div>

      {/* MAIN SECTION CONTENT */}
      {activeTab === 'projects' && !editingProject && (
        <div className="space-y-8">
          <div className="flex items-center justify-between border-b border-[#1A1A1A]/15 dark:border-white/15 pb-4">
            <h2 className="font-serif-luxury text-xl font-bold text-[#1A1A1A] dark:text-[#F4F2ED]">
              {isAr ? 'قائمة المشاريع الحالية' : 'Archive Directory & Published Works'}
            </h2>
            <button
              onClick={handleStartCreate}
              className="flex items-center gap-2 bg-[#1A1A1A] dark:bg-[#F4F2ED] hover:bg-[#D4AF37] dark:hover:bg-[#D4AF37] hover:text-[#1A1A1A] dark:hover:text-[#0E0D0C] text-white dark:text-[#0E0D0C] px-6 py-3 text-xs font-mono uppercase tracking-[0.2em] transition-colors duration-300 cursor-pointer shadow-md border border-[#1A1A1A] dark:border-white/20"
            >
              <Plus className="h-4 w-4" />
              <span>{isAr ? 'إضافة مشروع جديد' : 'CREATE CASE STUDY'}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((proj) => (
              <div
                key={proj.id}
                className="group relative flex flex-col justify-between overflow-hidden bg-[#F9F8F6] dark:bg-[#141312] border-t-2 border-t-[#1A1A1A] dark:border-t-[#D4AF37] border-x border-b border-[#1A1A1A]/15 dark:border-white/15 p-6 transition-all duration-500 hover:shadow-xl dark:hover:shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
              >
                <div className="space-y-4">
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#1A1A1A] border border-[#1A1A1A]/20 dark:border-white/20">
                    <img src={proj.imageSrc} alt="" className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[1000ms]" />
                    <div className="absolute top-3 ltr:right-3 rtl:left-3 flex gap-1.5">
                      {proj.featured && (
                        <span className="bg-[#D4AF37] text-[#1A1A1A] text-[9px] font-mono font-bold px-2.5 py-1 uppercase tracking-widest">
                          CAROUSEL
                        </span>
                      )}
                      <span className={`text-[9px] font-mono font-bold px-2.5 py-1 uppercase tracking-widest ${
                        proj.isPublished ? 'bg-[#1A1A1A] dark:bg-[#F4F2ED] text-[#F9F8F6] dark:text-[#0E0D0C]' : 'bg-[#EBE5DE] dark:bg-[#181716] text-[#6C6863] dark:text-[#A39E98]'
                      }`}>
                        {proj.isPublished ? (isAr ? 'منشور' : 'PUBLISHED') : (isAr ? 'مسودة' : 'DRAFT')}
                      </span>
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#D4AF37]">{proj.category}</span>
                    <h3 className="font-serif-luxury text-2xl font-bold text-[#1A1A1A] dark:text-[#F4F2ED] mt-1 group-hover:text-[#D4AF37] transition-colors">{proj.title[language]}</h3>
                    <p className="text-sm text-[#6C6863] dark:text-[#A39E98] line-clamp-2 mt-1.5 leading-relaxed font-sans-luxury">{proj.description[language]}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-[#1A1A1A]/15 dark:border-white/15 pt-4 mt-6">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleTogglePublish(proj.id)}
                      className={`text-[10px] font-mono tracking-wider uppercase px-3 py-1.5 border transition cursor-pointer ${
                        proj.isPublished 
                          ? 'border-[#1A1A1A] dark:border-white/30 text-[#1A1A1A] dark:text-[#F4F2ED] hover:bg-[#1A1A1A] hover:text-white dark:hover:bg-[#F4F2ED] dark:hover:text-[#0E0D0C]' 
                          : 'border-[#6C6863]/30 text-[#6C6863] dark:text-[#A39E98] hover:bg-[#EBE5DE] dark:hover:bg-[#181716]'
                      }`}
                    >
                      {proj.isPublished ? (isAr ? 'تعطيل' : 'UNPUBLISH') : (isAr ? 'نشر' : 'PUBLISH')}
                    </button>
                    <button
                      onClick={() => handleToggleFeatured(proj.id)}
                      className={`text-[10px] font-mono tracking-wider uppercase px-3 py-1.5 border transition cursor-pointer ${
                        proj.featured ? 'border-[#D4AF37] text-[#1A1A1A] dark:text-[#D4AF37] bg-[#D4AF37]/20' : 'border-[#1A1A1A]/20 dark:border-white/20 text-[#6C6863] dark:text-[#A39E98]'
                      }`}
                    >
                      {proj.featured ? '★ FEATURED' : '☆ FEATURE'}
                    </button>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleStartEdit(proj)}
                      className="p-2 bg-[#1A1A1A] dark:bg-[#F4F2ED] hover:bg-[#D4AF37] dark:hover:bg-[#D4AF37] text-white dark:text-[#0E0D0C] hover:text-[#1A1A1A] dark:hover:text-[#0E0D0C] transition cursor-pointer"
                      title="Edit"
                    >
                      <Edit3 className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteProject(proj.id)}
                      className="p-2 bg-red-900/10 dark:bg-red-950/40 hover:bg-red-600 hover:text-white text-red-700 dark:text-red-400 border border-red-500/20 transition cursor-pointer"
                      title="Delete"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* PROJECT EDITOR FORM */}
      {editingProject && (
        <form onSubmit={handleSaveProjectForm} className="space-y-8 bg-[#F9F8F6] dark:bg-[#141312] p-8 md:p-12 border-t-4 border-t-[#D4AF37] border-x border-b border-[#1A1A1A]/20 dark:border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.6)] transition-colors duration-300">
          <div className="flex items-center justify-between border-b border-[#1A1A1A]/15 dark:border-white/15 pb-6">
            <button
              type="button"
              onClick={() => setEditingProject(null)}
              className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#6C6863] dark:text-[#A39E98] hover:text-[#1A1A1A] dark:hover:text-white transition cursor-pointer"
            >
              <ArrowLeft className="h-4 w-4 rtl:rotate-180 text-[#D4AF37]" />
              <span>{isAr ? 'العودة للمشاريع' : 'BACK TO DIRECTORY'}</span>
            </button>
            <h2 className="font-serif-luxury text-2xl font-bold text-[#1A1A1A] dark:text-[#F4F2ED]">
              {isCreating 
                ? (isAr ? 'إنشاء مشروع جديد' : 'Create New Case Study') 
                : (isAr ? 'تعديل مشروع' : 'Edit Case Study Entry')}
            </h2>
            <button
              type="submit"
              className="flex items-center gap-2 bg-[#1A1A1A] dark:bg-[#F4F2ED] hover:bg-[#D4AF37] dark:hover:bg-[#D4AF37] text-white dark:text-[#0E0D0C] hover:text-[#1A1A1A] dark:hover:text-[#0E0D0C] px-8 py-3 text-xs font-mono uppercase tracking-[0.2em] transition-colors duration-300 cursor-pointer shadow-md border border-[#1A1A1A] dark:border-white/20"
            >
              <Save className="h-4 w-4" />
              <span>{isAr ? 'حفظ المشروع' : 'SAVE TO ARCHIVE'}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* English Metadata */}
            <div className="space-y-6 bg-[#EBE5DE]/40 dark:bg-[#1E1D1B] p-6 border border-[#1A1A1A]/15 dark:border-white/15">
              <h3 className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-[0.2em] border-b border-[#1A1A1A]/15 dark:border-white/15 pb-2">
                ENGLISH METADATA (LTR)
              </h3>
              
              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-[#6C6863] dark:text-[#A39E98] mb-2">Project Title (EN)</label>
                <input
                  type="text"
                  required
                  value={projectForm.title?.en || ''}
                  onChange={e => setProjectForm({
                    ...projectForm,
                    title: { ...projectForm.title!, en: e.target.value }
                  })}
                  className="w-full bg-transparent border-b border-[#1A1A1A]/30 dark:border-white/30 py-2 font-serif-luxury text-lg text-[#1A1A1A] dark:text-[#F4F2ED] focus:border-[#D4AF37] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-[#6C6863] dark:text-[#A39E98] mb-2">Short Summary (EN)</label>
                <textarea
                  rows={2}
                  value={projectForm.description?.en || ''}
                  onChange={e => setProjectForm({
                    ...projectForm,
                    description: { ...projectForm.description!, en: e.target.value }
                  })}
                  className="w-full bg-transparent border-b border-[#1A1A1A]/30 dark:border-white/30 py-2 font-sans-luxury text-sm text-[#1A1A1A] dark:text-[#F4F2ED] focus:border-[#D4AF37] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-[#6C6863] dark:text-[#A39E98] mb-2">Role (EN)</label>
                <input
                  type="text"
                  value={projectForm.role?.en || ''}
                  onChange={e => setProjectForm({
                    ...projectForm,
                    role: { ...projectForm.role!, en: e.target.value }
                  })}
                  className="w-full bg-transparent border-b border-[#1A1A1A]/30 dark:border-white/30 py-2 font-sans-luxury text-sm text-[#1A1A1A] dark:text-[#F4F2ED] focus:border-[#D4AF37] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-[#6C6863] dark:text-[#A39E98] mb-2">MDX Case Study Body (EN)</label>
                <textarea
                  rows={8}
                  value={projectForm.contentMDX?.en || ''}
                  onChange={e => setProjectForm({
                    ...projectForm,
                    contentMDX: { ...projectForm.contentMDX!, en: e.target.value }
                  })}
                  className="w-full bg-[#F9F8F6] dark:bg-[#141312] border border-[#1A1A1A]/20 dark:border-white/20 p-4 font-mono text-xs text-[#1A1A1A] dark:text-[#F4F2ED] focus:border-[#D4AF37] focus:outline-none"
                />
              </div>
            </div>

            {/* Arabic Metadata */}
            <div className="space-y-6 bg-[#EBE5DE]/40 dark:bg-[#1E1D1B] p-6 border border-[#1A1A1A]/15 dark:border-white/15" dir="rtl">
              <h3 className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-[0.2em] border-b border-[#1A1A1A]/15 dark:border-white/15 pb-2">
                بيانات اللغة العربية (RTL)
              </h3>
              
              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-[#6C6863] dark:text-[#A39E98] mb-2">عنوان المشروع (عربي)</label>
                <input
                  type="text"
                  required
                  value={projectForm.title?.ar || ''}
                  onChange={e => setProjectForm({
                    ...projectForm,
                    title: { ...projectForm.title!, ar: e.target.value }
                  })}
                  className="w-full bg-transparent border-b border-[#1A1A1A]/30 dark:border-white/30 py-2 font-serif-luxury text-lg text-[#1A1A1A] dark:text-[#F4F2ED] focus:border-[#D4AF37] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-[#6C6863] dark:text-[#A39E98] mb-2">الوصف الموجز (عربي)</label>
                <textarea
                  rows={2}
                  value={projectForm.description?.ar || ''}
                  onChange={e => setProjectForm({
                    ...projectForm,
                    description: { ...projectForm.description!, ar: e.target.value }
                  })}
                  className="w-full bg-transparent border-b border-[#1A1A1A]/30 dark:border-white/30 py-2 font-sans-luxury text-sm text-[#1A1A1A] dark:text-[#F4F2ED] focus:border-[#D4AF37] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-[#6C6863] dark:text-[#A39E98] mb-2">الدور (عربي)</label>
                <input
                  type="text"
                  value={projectForm.role?.ar || ''}
                  onChange={e => setProjectForm({
                    ...projectForm,
                    role: { ...projectForm.role!, ar: e.target.value }
                  })}
                  className="w-full bg-transparent border-b border-[#1A1A1A]/30 dark:border-white/30 py-2 font-sans-luxury text-sm text-[#1A1A1A] dark:text-[#F4F2ED] focus:border-[#D4AF37] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-[#6C6863] dark:text-[#A39E98] mb-2">نص دراسة الحالة MDX (عربي)</label>
                <textarea
                  rows={8}
                  value={projectForm.contentMDX?.ar || ''}
                  onChange={e => setProjectForm({
                    ...projectForm,
                    contentMDX: { ...projectForm.contentMDX!, ar: e.target.value }
                  })}
                  className="w-full bg-[#F9F8F6] dark:bg-[#141312] border border-[#1A1A1A]/20 dark:border-white/20 p-4 font-mono text-xs text-[#1A1A1A] dark:text-[#F4F2ED] focus:border-[#D4AF37] focus:outline-none"
                />
              </div>
            </div>

          </div>

          {/* Shared Settings */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-[#1A1A1A]/15 dark:border-white/15 font-mono">
            <div>
              <label className="block text-xs uppercase tracking-widest text-[#6C6863] dark:text-[#A39E98] mb-2">Main Cover Image URL</label>
              <input
                type="text"
                value={projectForm.imageSrc || ''}
                onChange={e => setProjectForm({ ...projectForm, imageSrc: e.target.value })}
                className="w-full bg-[#F9F8F6] dark:bg-[#141312] border border-[#1A1A1A]/20 dark:border-white/20 p-3 text-xs text-[#1A1A1A] dark:text-[#F4F2ED]"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-[#6C6863] dark:text-[#A39E98] mb-2">Category</label>
              <select
                value={projectForm.category || 'UI/UX'}
                onChange={e => setProjectForm({ ...projectForm, category: e.target.value })}
                className="w-full bg-[#F9F8F6] dark:bg-[#141312] border border-[#1A1A1A]/20 dark:border-white/20 p-3 text-xs text-[#1A1A1A] dark:text-[#F4F2ED]"
              >
                <option value="UI/UX">UI/UX</option>
                <option value="Branding">Branding</option>
                <option value="Architecture">Architecture</option>
                <option value="Web">Web</option>
              </select>
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-[#6C6863] dark:text-[#A39E98] mb-2">Year</label>
              <input
                type="text"
                value={projectForm.year || '2025'}
                onChange={e => setProjectForm({ ...projectForm, year: e.target.value })}
                className="w-full bg-[#F9F8F6] dark:bg-[#141312] border border-[#1A1A1A]/20 dark:border-white/20 p-3 text-xs text-[#1A1A1A] dark:text-[#F4F2ED]"
              />
            </div>
          </div>
        </form>
      )}

      {/* PROFILE SETTINGS FORM */}
      {activeTab === 'profile' && (
        <form onSubmit={handleSaveProfileForm} className="space-y-8 bg-[#F9F8F6] dark:bg-[#141312] p-8 md:p-12 border-t-4 border-t-[#D4AF37] border-x border-b border-[#1A1A1A]/20 dark:border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.6)] transition-colors duration-300">
          <div className="flex items-center justify-between border-b border-[#1A1A1A]/15 dark:border-white/15 pb-6">
            <h2 className="font-serif-luxury text-2xl font-bold text-[#1A1A1A] dark:text-[#F4F2ED]">
              {isAr ? 'إعدادات الملف الشخصي والسيرة الذاتية' : 'Profile & Bio Editorial Customization'}
            </h2>
            <button
              type="submit"
              className="flex items-center gap-2 bg-[#1A1A1A] dark:bg-[#F4F2ED] hover:bg-[#D4AF37] dark:hover:bg-[#D4AF37] text-white dark:text-[#0E0D0C] hover:text-[#1A1A1A] dark:hover:text-[#0E0D0C] px-8 py-3 text-xs font-mono uppercase tracking-[0.2em] transition-colors duration-300 cursor-pointer shadow-md border border-[#1A1A1A] dark:border-white/20"
            >
              <Save className="h-4 w-4" />
              <span>{isAr ? 'حفظ الملف الشخصي' : 'SAVE PROFILE'}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* EN Profile Inputs */}
            <div className="space-y-6 bg-[#EBE5DE]/40 dark:bg-[#1E1D1B] p-6 border border-[#1A1A1A]/15 dark:border-white/15">
              <h3 className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-[0.2em] border-b border-[#1A1A1A]/15 dark:border-white/15 pb-2">
                ENGLISH PROFILE DETAILS
              </h3>
              
              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-[#6C6863] dark:text-[#A39E98] mb-2">Full Name (EN)</label>
                <input
                  type="text"
                  value={profileForm.name.en}
                  onChange={e => setProfileForm({
                    ...profileForm,
                    name: { ...profileForm.name, en: e.target.value }
                  })}
                  className="w-full bg-transparent border-b border-[#1A1A1A]/30 dark:border-white/30 py-2 font-serif-luxury text-lg text-[#1A1A1A] dark:text-[#F4F2ED] focus:border-[#D4AF37] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-[#6C6863] dark:text-[#A39E98] mb-2">Title (EN)</label>
                <input
                  type="text"
                  value={profileForm.title.en}
                  onChange={e => setProfileForm({
                    ...profileForm,
                    title: { ...profileForm.title, en: e.target.value }
                  })}
                  className="w-full bg-transparent border-b border-[#1A1A1A]/30 dark:border-white/30 py-2 font-sans-luxury text-sm text-[#1A1A1A] dark:text-[#F4F2ED] focus:border-[#D4AF37] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-[#6C6863] dark:text-[#A39E98] mb-2">Bio Narrative (EN)</label>
                <textarea
                  rows={4}
                  value={profileForm.bio.en}
                  onChange={e => setProfileForm({
                    ...profileForm,
                    bio: { ...profileForm.bio, en: e.target.value }
                  })}
                  className="w-full bg-[#F9F8F6] dark:bg-[#141312] border border-[#1A1A1A]/20 dark:border-white/20 p-4 font-sans-luxury text-sm text-[#1A1A1A] dark:text-[#F4F2ED] focus:border-[#D4AF37] focus:outline-none"
                />
              </div>
            </div>

            {/* AR Profile Inputs */}
            <div className="space-y-6 bg-[#EBE5DE]/40 dark:bg-[#1E1D1B] p-6 border border-[#1A1A1A]/15 dark:border-white/15" dir="rtl">
              <h3 className="text-xs font-mono font-bold text-[#D4AF37] uppercase tracking-[0.2em] border-b border-[#1A1A1A]/15 dark:border-white/15 pb-2">
                بيانات الملف الشخصي (بالعربية)
              </h3>
              
              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-[#6C6863] dark:text-[#A39E98] mb-2">الاسم الكامل (عربي)</label>
                <input
                  type="text"
                  value={profileForm.name.ar}
                  onChange={e => setProfileForm({
                    ...profileForm,
                    name: { ...profileForm.name, ar: e.target.value }
                  })}
                  className="w-full bg-transparent border-b border-[#1A1A1A]/30 dark:border-white/30 py-2 font-serif-luxury text-lg text-[#1A1A1A] dark:text-[#F4F2ED] focus:border-[#D4AF37] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-[#6C6863] dark:text-[#A39E98] mb-2">المسمى الوظيفي (عربي)</label>
                <input
                  type="text"
                  value={profileForm.title.ar}
                  onChange={e => setProfileForm({
                    ...profileForm,
                    title: { ...profileForm.title, ar: e.target.value }
                  })}
                  className="w-full bg-transparent border-b border-[#1A1A1A]/30 dark:border-white/30 py-2 font-sans-luxury text-sm text-[#1A1A1A] dark:text-[#F4F2ED] focus:border-[#D4AF37] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-[#6C6863] dark:text-[#A39E98] mb-2">السيرة الذاتية (عربي)</label>
                <textarea
                  rows={4}
                  value={profileForm.bio.ar}
                  onChange={e => setProfileForm({
                    ...profileForm,
                    bio: { ...profileForm.bio, ar: e.target.value }
                  })}
                  className="w-full bg-[#F9F8F6] dark:bg-[#141312] border border-[#1A1A1A]/20 dark:border-white/20 p-4 font-sans-luxury text-sm text-[#1A1A1A] dark:text-[#F4F2ED] focus:border-[#D4AF37] focus:outline-none"
                />
              </div>
            </div>

          </div>

          {/* Avatar and Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-[#1A1A1A]/15 dark:border-white/15 pt-6 font-mono">
            <div>
              <label className="block text-xs uppercase tracking-widest text-[#6C6863] dark:text-[#A39E98] mb-2">Avatar Image URL</label>
              <input
                type="text"
                value={profileForm.avatar}
                onChange={e => setProfileForm({ ...profileForm, avatar: e.target.value })}
                className="w-full bg-[#F9F8F6] dark:bg-[#141312] border border-[#1A1A1A]/20 dark:border-white/20 p-3 text-xs text-[#1A1A1A] dark:text-[#F4F2ED]"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-[#6C6863] dark:text-[#A39E98] mb-2">Email Address</label>
              <input
                type="email"
                value={profileForm.email}
                onChange={e => setProfileForm({ ...profileForm, email: e.target.value })}
                className="w-full bg-[#F9F8F6] dark:bg-[#141312] border border-[#1A1A1A]/20 dark:border-white/20 p-3 text-xs text-[#1A1A1A] dark:text-[#F4F2ED]"
              />
            </div>
          </div>
        </form>
      )}

    </main>
  );
};
