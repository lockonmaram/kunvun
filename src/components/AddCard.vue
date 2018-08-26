<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent max-width="500px">
      <v-btn slot="activator" color="white" >Add Task</v-btn>
      <v-card class="add-task">
        <v-card-title>
          <span class="headline">New Task</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm12 md4>
                <v-text-field label="Task name" v-model="task" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm12 md4>
                <v-text-field label="Note" v-model="note"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 d-flex>
                <v-radio-group v-model="status">
                  <v-radio :label="`Backlog`" :value="'backlog'"></v-radio>
                  <v-radio :label="`Todo`" :value="'todo'"></v-radio>
                  <v-radio :label="`Doing`" :value="'doing'"></v-radio>
                  <v-radio :label="`Done`" :value="'done'"></v-radio>
                </v-radio-group>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" flat @click.native="dialog = false" v-on:click="submitTask(task, note, status)">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'AddCard',
  data () {
    return {
      dialog: false,
      task: '',
      note: '',
      status: ''
    }
  },
  methods: {
    ...mapActions([
      "writeTask"
    ]),
    submitTask: function(task, note, status){
      let inputTask = {
        task,
        note,
        status
      }
      this.writeTask(inputTask)
      this.task = ''
      this.note = ''
      this.status = ''
      this.$router.push({ path: '/' })
    }
  },
}
</script>

<style>
  .add-task {
    background-color: white;
  }
</style>
