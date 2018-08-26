<template>
  <div class="kanban">
    <h1>Kunvun is Kanban</h1>
    <KanbanBoard></KanbanBoard>
  </div>
</template>

<script>
// @ is an alias to /src
import KanbanBoard from '@/components/KanbanBoard.vue'

export default {
  name: 'kanban',
  components: {
    KanbanBoard
  }
}
</script>
