<template>
    <section id="decorGuidance">
        <v-container  >
            <v-row align="center" justify="center">
                <v-col cols="12" sm="8" md="6">
                    <h2 class=" text-primary text-h3">My Staging Expertise</h2>
                    <v-list bg-color="transparent" lines="      ">
                        <v-list-item
                            v-for="(item,index) in data"
                            :key="index"
                            :title="item.content"
                            :prepend-icon="item.icon"
                        ></v-list-item>
                    </v-list>
                </v-col>
                <v-col cols="12" sm="8" md="6" > 
                    <v-img class="rounded-xl position-relative overflow-hidden decor-guidance-img"  src="./images/cmp/photo6.jpg">
                        <h2 class="decor-guidance-text text-primary pl-4 pa-2 text-h3 border-s-xl border-primary border-opacity-100" :style="`background: linear-gradient(90deg,${secondaryColor},#21212100);`">Decor Guidance</h2>
                    </v-img>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>
<script setup>
    import {ref,onMounted,computed} from "vue"
    import { useTheme  } from 'vuetify';
    const theme  = useTheme ();
    const primaryColor = computed(() => theme.current.value.colors.primary);
    const secondaryColor = computed(() => theme.current.value.colors.secondary);

    const data = ref([
        {
            icon:'mdi-menu-right',
            content:'Unclutter and organize your home'
        },
        {
            icon:'mdi-menu-right',
            content:'Neatly arrange drawers and cabinets'
        },
        {
            icon:'mdi-menu-right',
            content:'Keep pets outdoors or off the premises'
        },
        {
            icon:'mdi-menu-right',
            content:'Play soft music'
        },
    ])
</script>
<style>
    .decor-guidance-text{
        position: absolute;
        bottom: 20px;
        left: 20px;
        width: 100%;
        
    }
    #decorGuidance{
        padding: 5svh 0;
    }
    .decor-guidance-img{
        box-shadow:  0 20px 20px #cfcfcf inset, 0 8px 8px #424242   ;
    }
</style>