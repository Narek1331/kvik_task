<?php
namespace App\Services;

use App\Repositories\TaskRepository;

class TaskService
{
    protected $taskRepository;

    public function __construct(TaskRepository $taskRepository)
    {
        $this->taskRepository = $taskRepository;
    }

    /**
     * Get all tasks.
     *
     * @return \Illuminate\Database\Eloquent\Collection|Task[]
     */
    public function getAllTasks()
    {
        return $this->taskRepository->all();
    }

    /**
     * Create a new task.
     *
     * @param array $data
     * @return Task
     */
    public function createTask(array $data)
    {
        return $this->taskRepository->create($data);
    }

    /**
     * Find a task by its ID.
     *
     * @param int $id
     * @return Task|null
     */
    public function findTaskById(int $id)
    {
        return $this->taskRepository->find($id);
    }

    /**
     * Update a task.
     *
     * @param int $id
     * @param array $data
     * @return bool
     */
    public function updateTask(int $id, array $data)
    {
        return $this->taskRepository->update($id, $data);
    }

    /**
     * Delete a task by its ID.
     *
     * @param int $id
     * @return bool
     */
    public function deleteTask(int $id)
    {
        return $this->taskRepository->delete($id);
    }
}
