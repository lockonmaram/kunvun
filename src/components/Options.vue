<template>
  <v-layout row justify-center>
    <v-btn dark @click.stop="optionDialog = true">
      Options
    </v-btn>
    <v-dialog v-model="optionDialog" max-width="500">
      <v-card class="options">
        <v-card-title class="headline">Options</v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-layout row justify-center>
            <v-btn color="yellow" flat="flat" @click="optionDialog = false">
              Cancel
            </v-btn>
            <v-btn color="green" flat="flat" @click="moveDialog = true">
              Move
            </v-btn>
            <v-dialog v-model="moveDialog" max-width="500">
              <v-card class="options">
                <v-card-title class="headline">Move to:</v-card-title>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="yellow" flat="flat" @click="optionDialog = false">
                    Cancel
                  </v-btn>
                  <v-btn color="blue-grey" flat="flat" @click="optionDialog = false" v-on:click="taskMove(taskId, task, 'backlog')">
                    Backlog
                  </v-btn>
                  <v-btn color="brown" flat="flat" @click="optionDialog = false" v-on:click="taskMove(taskId, task, 'todo')">
                    Todo
                  </v-btn>
                  <v-btn color="cyan darken-2" flat="flat" @click="optionDialog = false" v-on:click="taskMove(taskId, task, 'doing')">
                    Doing
                  </v-btn>
                  <v-btn color="green darken-1" flat="flat" @click="optionDialog = false" v-on:click="taskMove(taskId, task, 'done')">
                    Done
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-layout>
          <v-btn color="red" flat="flat" @click="optionDialog = false" v-on:click="removeTask(taskId)">
            Delete
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Options',
  data () {
    return {
      optionDialog: false,
      moveDialog: false
    }
  },
  methods: {
    ...mapActions([
      "deleteTask",
      "moveTask"
    ]),
    removeTask: function(taskId){
      // console.log(taskId);
      this.deleteTask(taskId)
    },
    taskMove: function(taskId, task, status){
      let input = {
        taskId: taskId,
        status: status,
        task: task
      }
      // console.log(input);
      this.moveTask(input)
    }
  },
  props: {
    taskId: String,
    task: Object
  },
}
</script>

<style>
  .options {
    background-color: white;
  }
</style>
