<template>
  <v-menu offset-y left>
        <template v-slot:activator="{ on }">
          <v-avatar v-on="on">
            <img src="../assets/profile.jpg" />
          </v-avatar>
        </template>

        <v-card>
          <v-list class="overflow-y-auto" style="max-height: calc(100vh - 100px)">
            <v-list-item>
              <v-list-item-avatar>
                <img src="../assets/profile.jpg" />
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>Fatemeh Ghafari</v-list-item-title>
                <v-list-item-subtitle class="blue--text"
                  >Manage your Google account</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>
            </v-list>
          <v-divider></v-divider>
        </v-card>
      </v-menu>
</template>



<style>

</style>