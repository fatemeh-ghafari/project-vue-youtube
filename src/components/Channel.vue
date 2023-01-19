<template>
  <div id="channel-home">
    <Navbar />
    <div class="nav-bgcolor">
      <div id="channel-header" class="mt-5">
        <v-container class="py-0">
          <v-row>
              <v-card class="transparent" flat>
                <v-list-item three-line>
                  <v-list-item-avatar size="80"
                    ><v-img
                      src="../assets/profile.jpg"
                    ></v-img
                  ></v-list-item-avatar>
                  <v-list-item-content class="align-self-auto">
                    <v-list-item-title class="headline mb-1"
                      >Fatemeh Ghafari</v-list-item-title
                    >
                    <v-list-item-subtitle
                      >1.06M subscribers
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-card>
              <v-spacer></v-spacer>
              <v-btn class="blue white--text mt-6" tile large depressed
                >Custumize channel</v-btn
              >
              <v-btn class="blue white--text mt-6 ml-2" tile large depressed
                >Manage videos</v-btn
              >
            
          </v-row>
        </v-container>
      </div>
      <v-card flat class="transparent">
        <v-tabs
          v-model="tab"
          background-color="transparent"
          show-arrows
          centered
          center-active
        >
          <v-tab v-for="(item, i) in items" :key="i">
            {{ item }}
          </v-tab>
          <v-tab>
          <v-icon>mdi-magnify</v-icon></v-tab>
        </v-tabs>

        <v-container fluid>
          <v-tabs-items v-model="tab" class="transparent">
            <v-tab-item>
              <v-card class="transparent" flat>
                <v-card-title>Popular Uploads
                    <v-btn text>
                        <v-icon left large>mdi-menu-right</v-icon>
                        <span>PLAY ALL</span>
                    </v-btn>
                </v-card-title>
                <!-- <v-sheet class="mx-auto"> -->
                <v-slide-group class="pa-4" multiple show-arrows>
                  <v-slide-item v-for="i in loading ? 5 : 10" :key="i">
                    <v-skeleton-loader
                      type="card-avatar"
                      :loading="loading"
                      width="250px"
                      class="mr-1"
                    >
                      <video-card
                        :card="{ maxWidth: 250, type: 'noAvatar' }"
                        :video="video"
                        :channel="channel"
                      ></video-card>
                    </v-skeleton-loader>
                  </v-slide-item>
                </v-slide-group>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card class="transparent" flat>
                <v-card-title>Uploads</v-card-title>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                    lg="3"
                    v-for="i in loading ? 10 : 12"
                    :key="i"
                    class="mx-xs-auto"
                  >
                    <v-skeleton-loader type="card-avatar" :loading="loading">
                      <video-card
                        :card="{ maxWidth: 350 }"
                        :video="video"
                        :channel="channel"
                      ></video-card>
                    </v-skeleton-loader>
                  </v-col>
                </v-row>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-container>
      </v-card>
    </div>
  </div>
</template>

<script>
import VideoCard from '@/components/VideoCard'
import Navbar from '@/components/Navbar'
import p1 from '../assets/p1.jpg';
export default {
  data: () => ({
    tab: 0,
    loading: true,
    items: ['Home', 'Videos', 'Playlists', 'Community', 'Channels', 'about'],
    video: {
      id: 1,
      title: "Pizza ",
      thumbnail:p1,
      youtubeURL: "https://www.youtube.com/",
      creator: "FastFood",
      likes: 0,
      dislikes: 0,
      createdAt: '10 years ago',
      subscribers: '100k',
      views: 4526,
      description:"The word pizza first appeared in a Latin text from the town of Gaeta, then still part of the Byzantine Empire, in 997 AD; the text states that a tenant of certain property is to give the bishop of Gaeta duodecim pizze every Christmas Day, and another twelve every Easter Sunday"
    },
    channel: {
      url: '/channel',
      avatar: 'profile.png'
    }
  }),
  components: {
    VideoCard,
    Navbar
  },
  mounted() {
    setTimeout(() => {
      this.loading = false
    }, 3000)
  }
}
</script>

<style>


.v-tab {
  margin-right: 4em;
}

#channel-home .v-list-item--link:before {
  background-color: transparent;
}
</style>
