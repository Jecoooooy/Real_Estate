<template>
    <section id="process">
        <v-container fluid>
        <h2 class="text-h3 text-secondary text-center">PROCESS</h2>
            <v-row>
                <v-col>
                <h3 class="text-center text-h4 text-secondary text-uppercase pb-4">Selling</h3>
                    <v-stepper bg-color="primary" class="rounded-xl" :items="sellingProcess">
                        <template v-for="(item, index) in sellingProcess" v-slot:[`item.${item.id}`]>
                            <v-card 
                                :title="`Step ${index + 1}: ${item.content}`" 
                                flat 
                                max-height="400px" 
                                class="rounded-lg"
                            >
                                <v-img
                                    :src="item.image"
                                    height="400"
                                    cover
                                    aspect-ratio="16/9"
                                ></v-img>
                            </v-card>
                        </template>
                    </v-stepper>
                </v-col>
                <v-col>
                    <h3 class="text-center text-h4 text-secondary text-uppercase pb-4">buying</h3>
                    <v-timeline 
                        size="small" 
                        truncate-line="both"
                        density="compact" 
                        hide-opposite side="end"
                    >
                        <v-timeline-item
                            height="100%"
                            width="100%"
                            v-for="item in buyingProcess"
                            :key="item.id"
                        >
                        <v-sheet
                            class=" pa-4 rounded-xl d-flex align-center"
                            color="primary"
                            height="100%"
                            :value="true"
                        >
                            <p>{{ item.content }}</p>
                        </v-sheet>
                        </v-timeline-item>
                    </v-timeline>
                </v-col>
            </v-row>
        </v-container>
    </section>

</template>
<script setup>
        import { storeToRefs } from 'pinia';
    import { useDataStore } from '../store.js';
    
    const dataStore = useDataStore();
    const { sellingProcess, buyingProcess } = storeToRefs(dataStore);


    import {ref,onMounted,computed} from "vue"
    import { useTheme  } from 'vuetify';
    const theme  = useTheme ();
    const primaryColor = computed(() => theme.current.value.colors.primary);
    const secondaryColor = computed(() => theme.current.value.colors.secondary);
</script>
<style>
#process{
    padding: 5svh 0;
}
</style>