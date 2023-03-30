const Todo = require('./todo')

Todo.methods(['get', 'post', 'put', 'dele'])
Todo.updateOptions({
    new: true,
    runValidators: true
})

module.exports = Todo