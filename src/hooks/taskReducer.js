    type actionProps = 
    | {type: 'added', text: string, id: number, done: boolean}
    | {type: 'deleted', id: number}


// function setReducer(tasks: typeof initialTasks, action:actionProps) {
//     switch (action.type) {
//         case 'added':
//             return[...tasks,
//                 {done: false,
//                 id: action.id,
//                 text: action.text}
//             ];
//         case 'deleted':
//             return tasks.filter(task => task.id != action.id)
    
//         default:
//             throw Error('No Type Found');
//     }
// }
// function handleAddTask(text: string) {
//     dispatch({
//         type: 'added',
//         id: nextId++,
//         text: text,
//         done: false
//     })    
// }
//     function deleteTask(id:number) {
//         dispatch({
//             type: 'deleted',
//             id: id,
//         })
//     }


//     const [tasks, dispatch] = useReducer(setReducer, initialTasks)


