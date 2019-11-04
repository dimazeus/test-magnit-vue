<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped

    >

      <v-list dense>
        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-exit-to-app</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              <router-link to="/branchProjects">
                Проекты филиала
              </router-link>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-exit-to-app</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              <router-link to="/myDocuments">
                Мои документы
              </router-link>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      flat
      clipped-left
      color="primary headerText--text"
    >
      <v-app-bar-nav-icon color="headerText" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title>{{$route.meta.title}}</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon color="headerText">mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            @click.stop="excelDialog = true"
          >
            <v-list-item-title>Экспорт в Excel</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-dialog v-model="excelDialog" max-width="290">
        <v-card>
          <v-card-title>Вы уверены что хотите выгрузить данные?</v-card-title>
          <v-card-text>Уверены?</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="excelDialog = false">Да</v-btn>
            <v-btn @click="excelDialog = false">Нет</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-app-bar>
    <v-content class="mainBackground">
      <v-container>
        <router-view/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data(){
    return {
      drawer: null,
      excelDialog: false
    }
  },
}
</script>
