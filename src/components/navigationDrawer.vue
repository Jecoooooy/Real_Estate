<template>
    <v-navigation-drawer
        v-model="drawer"
        color="third"
        permanent
        v-if="$vuetify.display.mobile ? true : false"
        
    >
        <v-list
        >
            <v-list-item 
                v-for="(item,index) in routes"
                :title="item.name"
                :to="item.path"
            >
                
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>
<script setup>
    import {ref} from "vue"
    import { storeToRefs } from 'pinia';
    import { useDataStore } from '../store.js';
    const dataStore = useDataStore();
    const { drawer } = storeToRefs(dataStore);
    import { useRouter } from 'vue-router';
    const router = useRouter()
    const routes = router.options.routes
    
</script>