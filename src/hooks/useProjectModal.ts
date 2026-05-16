import { useState, useCallback } from "react";

export function useProjectModal() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = useCallback((project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return {
    selectedProject,
    isModalOpen,
    openModal,
    closeModal,
  };
}
