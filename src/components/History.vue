<template>
    <div>
      <Navbar />
      <v-container fluid>
          <v-row>
            <v-col
              cols="12"
              sm="6"
              md="4"
              lg="3"
              v-for="i in loading ? 4 : 6"
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
        </v-container>
    </div>
    </template>
    
    <script>

      import videoCard from '@/components/VideoCard'
      import p2 from '../assets/p2.jpg';
      export default {
        name: 'Home',
      data: () => ({
        loading: true,
        video: {
          id: 1,
        title: "Pizza ",
        thumbnail:p2,
        youtubeURL: "https://www.youtube.com/",
        creator: "FastFood",
        likes: 0,
        dislikes: 0,
        createdAt: '2 years ago',
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
       
          videoCard
        },
        mounted() {
        setTimeout(() => {
          this.loading = false
        }, 2000)
        }
      }
    </script>
    <style lang="scss">
    
    </style>
    