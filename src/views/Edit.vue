<template>
  <v-container style="width: 40%">
    <v-card>
      <v-card-title>
        <span class="headline">Edit Post</span>
      </v-card-title>

      <v-card-text>
      <form @submit.prevent="save(editedItem)" id="check-login-form">
          <v-textarea
            v-model.trim="editedItem.title"
            label="Title post"
          ></v-textarea>
          <v-btn
            class="mr-4"
            type="submit" color="success"
          >
            submit
          </v-btn>
          <v-btn
            class="mr-4"
            to="/posts"
          >
            back
          </v-btn>
      </form>
      </v-card-text>
    </v-card>  
  </v-container>
</template>


<script>

export default {
  name: "Edit",
  data () {
    return {
      editedItem: ''
    }
  },
  created () {
    setTimeout( () => {
      this.editedItem = this.$store.state.editedItem
    }, 0);
  },
    methods: {
      save (form) {
        this.$store.dispatch("updatePost", form);
      },
  
      
    },
  }
</script>
