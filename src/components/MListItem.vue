<template>
    <v-list-item>
          <v-list-item-content>
            <div>
                <strong>{{title}}</strong>
                {{body}}
            </div>
          </v-list-item-content>
        </v-list-item>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            required: false
        },
        body: {
            type: String,
            required: true
        }
    }
}
</script>