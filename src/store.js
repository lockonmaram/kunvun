import Vue from 'vue'
import Vuex from 'vuex'
import firebaseDb from '@/firebase/firebase.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: null
  },
  mutations: {
    GET_TASKS (state, tasks) {
      state.tasks = tasks;
    }
  },
  actions: {
    writeTask(context, obj){
      firebaseDb.ref('tasks/').push().set(obj)
      // console.log('task added');
    },
    getTasks (context) {
      firebaseDb.ref('tasks/').on('value', function(snapshot) {
        let tasks = snapshot.val();
        context.commit('GET_TASKS', tasks)
        console.log(tasks);
      })
    },
    deleteTask(context, taskId){
      // console.log(taskId);
      firebaseDb.ref('tasks/' + taskId).remove()
    },
    moveTask(context, input){
      // var newPostKey = firebase.database().ref().child('tasks').push().key;
      console.log(input);
      firebaseDb.ref('tasks/' + input.taskId).set({task: input.task.task, status: input.status, note: input.task.note});
    }
  }
})
