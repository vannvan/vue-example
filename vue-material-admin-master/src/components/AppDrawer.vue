<template>
  <v-navigation-drawer
    app
    class="app-drawer"
    :mini-variant.sync="mini"
    v-model="drawer"
    :width="drawerWidth"
    :dark="$vuetify.dark"
  >
    <v-toolbar color="primary darken-1" dark>
      <img :src="computeLogo" height="36" alt="Vue Material Admin Template" />
      <v-toolbar-title class="ml-0 pl-3">
        <span class="hidden-sm-and-down">让跨境更简单</span>
      </v-toolbar-title>
    </v-toolbar>
    <div class="app-drawer__inner">
      <div class="pa-3">
        <!-- <v-subheader v-if="drawerWidth !== 64">
          {{ $vuetify.lang.t('$vuetify.sponsor') }}
        </v-subheader> -->
        <!-- <a :href="sponsor.href">
          <v-img
            :src="drawerWidth === 64 ? sponsor.srcMini : sponsor.src"
            alt="Optic fiber component provider"
          />
        </a> -->
      </div>
      <v-list :dense="drawerWidth !== 64" class="pa-0">
        <template v-for="(item, key) in computeMenu">
          <template v-if="item.children && item.children.length > 0">
            <v-list-group :key="key" no-action :to="item.href">
              <template v-slot:prependIcon>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon v-bind="attrs" v-on="on" v-text="item.icon" />
                  </template>
                  <span>
                    {{ $vuetify.lang.t('$vuetify.menu.' + item.menuName) }}
                  </span>
                </v-tooltip>
              </template>
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title
                    v-text="$vuetify.lang.t('$vuetify.menu.' + item.menuName)"
                  />
                </v-list-item-content>
              </template>
              <v-list-item
                :class="drawerWidth === 64 ? 'pl-4' : ''"
                v-for="subItem in item.children"
                :key="subItem.menuName"
                :to="subItem.href"
              >
                <template v-if="drawerWidth === 64">
                  <v-list-item-icon>
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on, attrs }">
                        <v-icon
                          v-bind="attrs"
                          v-on="on"
                          v-text="subItem.icon"
                        />
                      </template>
                      <span>{{
                        $vuetify.lang.t('$vuetify.menu.' + subItem.menuName)
                      }}</span>
                    </v-tooltip>
                  </v-list-item-icon>
                </template>
                <template v-else>
                  <v-list-item-content>
                    <v-list-item-title
                      v-text="
                        $vuetify.lang.t('$vuetify.menu.' + subItem.menuName)
                      "
                    />
                  </v-list-item-content>
                </template>
              </v-list-item>
            </v-list-group>
          </template>
          <template v-else>
            <v-list-item :key="key" :to="item.href">
              <v-list-item-icon>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon v-bind="attrs" v-on="on" v-text="item.icon" />
                  </template>
                  <span>{{
                    $vuetify.lang.t('$vuetify.menu.' + item.menuName)
                  }}</span>
                </v-tooltip>
              </v-list-item-icon>
              <v-list-item-content v-if="drawerWidth !== 64">
                <v-list-item-title
                  v-text="$vuetify.lang.t('$vuetify.menu.' + item.menuName)"
                />
              </v-list-item-content>
              <v-list-item-action v-if="item.new">
                <v-icon color="green">mdi-new-box </v-icon>
              </v-list-item-action>
            </v-list-item>
          </template>
        </template>
      </v-list>
    </div>

    <template v-slot:append>
      <div class="grey lighten-3">
        <template v-if="drawerWidth === 64">
          <div class="d-flex">
            <v-btn
              width="64"
              icon
              tile
              @click="handleDrawerCollapse"
              class="mx-auto"
            >
              <v-icon>mdi-arrow-collapse-right</v-icon>
            </v-btn>
          </div>
        </template>
        <template v-else>
          <div class="d-flex">
            <v-spacer />
            <v-btn icon tile @click="handleDrawerCollapse" class="mr-2">
              <v-icon>mdi-arrow-collapse-left</v-icon>
            </v-btn>
          </div>
        </template>
      </div>
    </template>
  </v-navigation-drawer>
</template>
<script>
import { protectedRoute as routes } from '@/router/config'
import menu from './menu'
export default {
  name: 'AppDrawer',
  components: {},
  props: {
    expanded: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      mini: false,
      drawerWidth: 256,
      drawer: true,
      scrollSettings: {
        maxScrollbarLength: 160
      },
      sponsor: {
        href: 'https://www.theopticalfiber.com/',
        src: require('@/assets/images/logo-1.png'),
        srcMini: 'https://www.theopticalfiber.com/logo/logo_mini.png'
      }
    }
  },

  computed: {
    computeLogo() {
      return require('@/assets/images/logo.png')
    },
    computeMenu() {
      //   return routes[0].children
      return menu
    }
  },
  created() {},

  methods: {
    handleDrawerCollapse() {
      this.drawerWidth = this.drawerWidth === 256 ? 64 : 256
    },
    toggleDrawer() {
      this.drawer = !this.drawer
    }
  }
}
</script>

<style lang="scss" scoped>
.v-toolbar__title {
  font-size: 1.1rem;
}
</style>
