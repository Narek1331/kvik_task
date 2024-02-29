<?php
namespace App\Repositories;

use App\Models\Task;

class TaskRepository
{
    /**
     * Get all tasks.
     *
     * @return \Illuminate\Database\Eloquent\Collection|Task[]
     */
    public function all()
    {
        return Task::all();
    }

    /**
     * Create a new task.
     *
     * @param array $data
     * @return Task
     */
    public function create(array $data)
    {
        return Task::create($data);
    }

    /**
     * Find a task by its ID.
     *
     * @param int $id
     * @return Task|null
     */
    public function find(int $id)
    {
        return Task::find($id);
    }

    /**
     * Update a task.
     *
     * @param int $id
     * @param array $data
     * @return bool
     */
    public function update(int $id, array $data)
    {
        $task = Task::find($id);

        if ($task) {
            $task->update($data);
            return true;
        }

        return false;
    }

    /**
     * Delete a task by its ID.
     *
     * @param int $id
     * @return bool
     */
    public function delete(int $id)
    {
        $task = Task::find($id);

        if ($task) {
            $task->delete();
            return true;
        }

        return false;
    }
}
