<script>
import PostAdvert from '../feed/postsTypes/PostAdvert.vue'
import PostFeatured from '../feed/postsTypes/PostFeatured.vue'
import PostUGC from '../feed/postsTypes/PostUGC.vue'
export default {
  data() {
    return {
      posts: [
        {
          id: '4',
          type: 'Featured',
          content: {
            title: 'Example Title',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
            hashtags: []
          }
        },
        {
          id: '5',
          type: 'Advert',
          business: {
            name: 'John Smith',
            handle: '@Example'
          },
          content: {
            title: 'Example Title',
            text: '50% off this thing that does something.',
            media: {
              example: 1
            },
            hashtags: ['BuyStuff']
          }
        },
        {
          id: '1',
          type: 'UGC',
          user: {
            name: 'John Smith',
            handle: '@Example',
            imageProfile: ''
          },
          meta: {
            postAge: '14',
            likes: '3',
            emojis: []
          },
          content: {
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            media: '',
            hashtags: ['Example', 'Another']
          }
        },
        {
          id: '2',
          type: 'UGC',
          user: {
            name: 'John Smith',
            handle: '@Example',
            imageProfile: ''
          },
          meta: {
            postAge: '14',
            likes: '3',
            emojis: []
          },
          content: {
            media: {
              example: 1
            },
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            hashtags: ['Example', 'Another']
          }
        },
        {
          id: '3',
          type: 'UGC',
          user: {
            name: 'John Smith',
            handle: '@Example',
            imageProfile: ''
          },
          meta: {
            postAge: '14',
            likes: '3',
            emojis: []
          },
          content: {
            media: {
              example: 1
            },
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            hashtags: ['Example', 'Another']
          }
        }
      ]
    }
  },
  components: { PostAdvert, PostFeatured, PostUGC }
}
</script>

<template>
  <div class="feed w-full grid">
    <div class="feed__list grid">
      <div
        v-for="post in posts"
        v-bind:key="post.id"
        class="post border-b-2 w-full flex flex-row items-start"
      >
        <PostAdvert v-if="post.type == 'Advert'" :post="post" />
        <PostFeatured v-else-if="post.type == 'Featured'" :post="post" />
        <PostUGC v-if="post.type == 'UGC'" :post="post" />
      </div>
    </div>
    <p class="feed__refresh text-sm text-center mx-4">
      No more posts. <a class="underline">Refresh?</a>
    </p>
  </div>
</template>

<style scoped lang="scss">
.featured {
  border: solid;
  border-width: 4px;
  border-image: url(../assets/border-tiny.png) 2 repeat;
}
</style>
