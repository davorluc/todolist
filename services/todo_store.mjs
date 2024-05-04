import Datastore from 'nedb-promises'

export class Todo{
    constructor(todoName, dueDate, importance, description, done = false) {
        this.dueDate= dueDate;
        this.todoName= todoName;
        this.importance = importance;
        this.description = description;
        this.creationDate = new Date();
        this.done = done;
    }
}

export class TodoStore{
    constructor(db) {
        this.db = db || new Datastore({filename: './data/todos.db', autoload: true});
    }

    async add(todoName, dueDate, importance, description, done) {
        let todo = new Todo(todoName, dueDate, importance, description, done);
        const storedTodo = await this.db.insert(todo);
        return storedTodo;
    }

    async delete(id) {
        await this.db.update({_id: id}, {$set: {"state": "DELETED"}});
        return this.get(id);
    }

    async get(id) {
        return this.db.findOne({_id: id});
    }

    async all() {
        return this.db.find({});
    }

    async update(id, updatedTodo) {
        return await this.db.update({_id: id} , {$set: updatedTodo}, (err, numReplaced) => {
            if (err) {
                console.log(err);
            } else {
                console.log(numReplaced);
            }
        });
    }

}

export const todoStore = new TodoStore();