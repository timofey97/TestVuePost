<template>
  <v-container style="width: 30%">
     <v-card>
        <v-card-title>
          <span class="headline">New post</span>
        </v-card-title>

        <v-card-text>
          <form @submit.prevent="save(form)" id="check-login-form">
                  <v-text-field
                    v-model.trim="form.title"
                    label="Title post"
                  ></v-text-field>
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
  name: 'Note',
  data: () => ({
    form : {
        title: ""
      }
    }),
    methods: {
      save (form) {
     this.$store.dispatch("addPost",form)
      },
    },
  }
</script>
