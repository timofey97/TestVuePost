<template>
  <v-container fluid style="margin: 30px auto; padding: 0px; width: 60%">

  <v-data-table
    :headers=headers  
    :items=Posts
    sort-by="id"
    class="elevation-1"
    :search="search"
  >
  <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title style="width: 40%">
          <v-text-field 
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          >
          </v-text-field>
      </v-toolbar-title>

        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-btn
              color="primary"
              dark
              class="mb-2"
              to="/posts/create"

            >
              New post
            </v-btn>

        
        <!-- <v-dialog
          v-model="dialog2"
          max-width="500px"
        >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
              color="primary"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
              
            >
              New post
            </v-btn>
             </template>
        
            
          <v-card>
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
          </v-card>
        </v-dialog> -->

        <v-dialog v-model="dialogDelete2" max-width="500px">
          <v-card>
            <v-card-title class="headline">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>

      </v-toolbar>
    </template>

    <template v-slot:item.actions="{ item }">
      <router-link :to="`/edit/${item.id}`">
      <v-icon
        small
        class="mr-2"
      >
        mdi-pencil
      </v-icon>
      </router-link>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>
  </v-data-table>
 
  </v-container>
</template>

<script>

export default {
  name: 'Posts',

  components: {
    
  },

  data: () => ({
     search: '',
    }),
    computed: {
      formTitle () {
        return this.$store.state.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
      Posts() {
        return this.$store.state.posts
      },
      headers() {
        return this.$store.state.headers
      },
      editedItem() {
        return this.$store.state.editedItem
      },
    },
  
    mounted() {
     this.$store.dispatch("getPosts");
  },
    methods: {
      editItem (item) {
        this.$store.dispatch("editItem", item);
      },
      deleteItem (item) {
        this.$store.dispatch("deleteItem", item);
      },
      deleteItemConfirm () {
        this.$store.dispatch("deleteItemConfirm");
      this.$store.dispatch("closeDelete");
      },
      
      closeDelete () {
        this.$store.dispatch("closeDelete");
      
      },
      save () {
        this.$store.dispatch("save");
     this.$store.dispatch("close");
      },
      close () {
        this.$store.dispatch("close");
      },
    },
  }
</script>
