<template>
  <v-container style="width: 30%">
      <form @submit.prevent="save(form)" id="check-login-form">
    <v-text-field
      v-model.trim="form.title"
      :error-messages="emailErrors"
      label="Title post"
      required
    ></v-text-field>

    <v-btn
      class="mr-4"
      type="submit" color="success"
    >
      submit
    </v-btn>
    <router-link to="/posts"><v-btn
      class="mr-4"
       
    >
      back
    </v-btn></router-link>

  </form>
  
    <!-- <form
      @submit.prevent="save(form)"
    >
      <h3>New Post</h3>
      <table>
        <tr>
          <td>Title</td>
       </tr>
       <tr>
        <td>POst title</td>
        <td>
          <input 
            type="text" 
            v-model.trim="form.title"
         >
        </td>
      </tr>
      <tr>
        <td colspan="2">
          <input type="submit">
        </td>
      </tr>
      </table>
    </form> -->

    
              <!-- <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row >
                  <v-col
                  >
                    <v-text-field
                      v-model="editedItem.id"
                      label="ID"
                    ></v-text-field>
                  </v-col>
                  <v-col
                  >
                    <v-text-field
                      v-model="editedItem.title"
                      label="Title"
                    ></v-text-field>
                  </v-col>
                  
                </v-row>
              </v-container>
            </v-card-text>


          <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card> -->
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
    // computed: {
    //   formTitle () {
    //     return this.$store.state.editedIndex === -1 ? 'New Item' : 'Edit Item'
    //   },
    //   editedItem() {
    //     return this.$store.state.editedItem
    //   },
    // },
    methods: {
      
      save (form) {
     this.$store.dispatch("addUser",form)
      },
    },
  }
</script>
