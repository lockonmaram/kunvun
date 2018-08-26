<template>
  <v-container grid-list-md text-xs-center>
    <AddCard></AddCard>
    <v-layout row wrap>
      <v-flex xs3>
        <v-card>
          <v-card-text class="px-0 my-2 ">Backlog</v-card-text>
        </v-card>
        <v-card v-for="(task, index) in tasks" :key="index" v-if="task.status === 'backlog'" color="blue-grey lighten-4">
          <v-card-text class="px-0 my-2 my-2">{{task.task}}</v-card-text>
          <small>note: {{task.note}}</small>
            <Options :taskId="index" :task="task"/>
        </v-card>
      </v-flex>
      <v-flex xs3>
        <v-card>
          <v-card-text class="px-0 my-2">Todo</v-card-text>
        </v-card>
        <v-card v-for="(task, index) in tasks" :key="index" v-if="task.status === 'todo'" color="brown lighten-2">
          <v-card-text class="px-0 my-2 my-2">{{task.task}}</v-card-text>
          <small>note: {{task.note}}</small>
            <Options :taskId="index" :task="task"/>
        </v-card>
      </v-flex>
      <v-flex xs3>
        <v-card>
          <v-card-text class="px-0 my-2">Doing</v-card-text>
        </v-card>
        <v-card v-for="(task, index) in tasks" :key="index" v-if="task.status === 'doing'" color="cyan darken-2">
          <v-card-text class="px-0 my-2 my-2">{{task.task}}</v-card-text>
          <small>note: {{task.note}}</small>
            <Options :taskId="index" :task="task"/>
        </v-card>
      </v-flex>
      <v-flex xs3>
        <v-card>
          <v-card-text class="px-0 my-2">Done</v-card-text>
        </v-card>
        <v-card v-for="(task, index) in tasks" :key="index" v-if="task.status === 'done'" color="green darken-1">
          <v-card-text class="px-0 my-2 my-2">{{task.task}}</v-card-text>
          <small>note: {{task.note}}</small>
          <Options :taskId="index" :task="task"/>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import AddCard from '@/components/AddCard.vue'
import Options from '@/components/Options.vue'

export default {
  name: 'KanbanBoard',
  components: {
    AddCard,
    Options
  },
  methods: {
    ...mapActions([
      "getTasks"
    ]),
  },
  computed: {
    ...mapState([
      'tasks'
    ])
  },
  mounted(){
    this.getTasks()
  }
}
</script>
