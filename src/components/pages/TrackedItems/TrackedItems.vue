<template>
  <div>
    <v-container class="pl-10">
      <v-row>
        <v-col>
          <v-btn
            text
            small
            color="accent"
            @click="openAddItemsDialog"
          >
            <v-icon class="pr-2" small>add</v-icon>
            Add Item
          </v-btn>
        </v-col>
      </v-row>
      <v-card
        v-for="(item, key) in trackedItems"
        :key="key"
        class="mx-auto primary-background"
      >
        <v-hover
          v-slot="{ hover }"
          close-delay="100"
        >
          <v-row
            class="text-subtitle-2 grey--text text--white-70 my-3 mx-2 border-1"
            :class="{ 'accent-border-focus': hover, 'primary-border': !hover }"
          >
            <v-col cols="5">
              {{ item.name }}
            </v-col>
            <v-col cols="6">
              {{ item.url }}
            </v-col>
            <v-col class="pl-0">
              <v-fade-transition>
                <span
                  v-show="hover"
                >
                  <v-icon
                    class="clickable pr-3"
                    small
                    color="accent"
                    @click="edit(key)"
                  >
                    edit
                  </v-icon>
                  <v-icon
                    class="clickable"
                    small
                    color="accent"
                    @click="remove(key)"
                  >
                    delete
                  </v-icon>
                </span>
              </v-fade-transition>
            </v-col>
          </v-row>
        </v-hover>
      </v-card>
    </v-container>
    <add-item-dialog ref="addItemDialog" @add="onAdd" @edit="onEdit" />
  </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex';
import AddItemDialog from '@/components/dialogs/AddItemDialog/AddItemDialog';

export default {
  name: 'TrackedItems',
  components: {
    AddItemDialog,
  },
  data() {
    return {
      addAmbassadorDialogModel: false,
    };
  },
  computed: {
    ...mapGetters([
      'trackedItems',
      'trackedItemsHash',
    ]),
  },
  watch: {
    trackedItemsHash: {
      handler() {
        this.$forceUpdate();
      },
    },
  },
  mounted() {
  },
  methods: {
    ...mapMutations([
      'addTrackedItem',
      'editTrackedItem',
      'removeTrackedItem',
    ]),
    openAddItemsDialog() {
      this.$refs.addItemDialog.dialogModel = true;
    },
    onAdd(item) {
      this.addTrackedItem(item);
    },
    onEdit(item) {
      this.editTrackedItem(item);
    },
    edit(id) {
      this.$refs.addItemDialog.name = this.trackedItems[id].name;
      this.$refs.addItemDialog.searchUrl = this.trackedItems[id].url;
      this.$refs.addItemDialog.dialogModel = true;
    },
    remove(id) {
      this.removeTrackedItem(id);
    },
  },
};
</script>

<style scoped lang="sass">
.primary-background
  background-color: var(--v-primary-base) !important
  -webkit-box-shadow: none
  -moz-box-shadow: none
  box-shadow: none !important
.accent-border-focus
  border-color: var(--v-accent-base) !important
.primary-border
  border-color: var(--v-primary-base) !important
.border-1
  border-style: solid
  border-width: 1px
</style>
