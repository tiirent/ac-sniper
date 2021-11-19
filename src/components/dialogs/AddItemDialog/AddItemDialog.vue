<template>
  <div id="add-item-dialog">
    <v-dialog
      v-model="dialogModel"
      dark
      overlay
      max-width="640px"
      transition="dialog-transition"
    >
      <v-card>
        <v-card-text class="pb-0">
          <v-container>
            <v-row class="pt-4">
              <v-col class="pb-0" cols="5">
                <v-text-field
                  v-model="name"
                  label="Name"
                  counter="40"
                  color="accent"
                  hint="kaom's heart < 5c"
                ></v-text-field>
              </v-col>
              <v-col class="pb-0" cols="7">
                <v-text-field
                  v-model="searchUrl"
                  label="Search Url"
                  clearable
                  color="accent"
                  hint="https://www.pathofexile.com/trade/search/Scourge/A3DZc5"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions class="pt-1">
          <v-spacer></v-spacer>
          <v-btn
            color="accent"
            text
            @click="closeDialog"
          >
            Close
          </v-btn>
          <v-btn
            color="accent"
            text
            :disabled="!formIsValid"
            @click="onSave"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  name: 'AddItemDialog',
  props: {},
  data() {
    return {
      dialogModel: false,
      name: '',
      searchUrl: '',
      id: null,
    };
  },
  computed: {
    formIsValid () {
      return (
        this.name !== '' && this.searchUrl !== ''
      );
    },
  },
  methods: {
    openDialog() {
      this.dialogModel = true;
    },
    closeDialog() {
      this.name = '';
      this.searchUrl = '';
      this.dialogModel = false;
      this.id = null;
    },
    onSave() {
      if (this.id) {
        this.$emit(
          'edit',
          {
            id: this.id,
            name: this.name,
            url: this.searchUrl,
          }
        );
      } else {
        this.$emit(
          'add',
          {
            name: this.name,
            url: this.searchUrl,
          }
        );
      }
      this.closeDialog();
    },
  },
};
</script>

<style scoped lang="sass">
</style>
