import Datastore from 'nedb-promises'

const db = new Datastore({filename: './data/todos.db', autoload: true});

export class Todo{
    constructor(
        public todoName: string,
        public dueDate: string,
        public importance: number,
        public description: string,
        public creationDate: Date = new Date(),
        public done: Boolean = false){
    }
}

export class TodoStore{

    async add(
        todoName: string,
        dueDate: string,
        importance: number,
        description: string,
        done: Boolean = false,
        ) {
        let todo = new Todo(todoName, dueDate, importance, description, new Date(), done);
        const storedTodo = await db.insert(todo);
        return storedTodo;
    }

    async delete(id: string) {
        return db.remove({_id: id}, {})
    }

    async get(id: string) {
        return db.findOne({_id: id});
    }

    async all(showCompleted: Boolean, orderBy: string, orderDirection: number) {
        const query = showCompleted ? {} : {done: false};
        return db.find(query).sort({[orderBy]: orderDirection});
    }

    async update(id: string, updatedTodo: Todo) {
        return await db.update({_id: id} , {$set: updatedTodo});
    }

    async updateDone(id: string, doneStatus: Boolean) {
        return await db.update({_id: id}, {$set: {done: doneStatus}});
    }

}

export const todoStore = new TodoStore();