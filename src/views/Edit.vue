<template>
  <v-container style="width: 30%">
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
  </v-container>
</template>


<script>

export default {
  name: 'Edit',


  data: () => ({
     
    }),
    computed: {
      formTitle () {
        return this.$store.state.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
      editedItem() {
        return this.$store.state.editedItem
      },
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
