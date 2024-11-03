<template>
    <section>
        <v-container fluid>
            <v-row>
                <v-col>
                    <v-timeline align="center" side="end">
                        <v-timeline-item
                            v-for="(item, i) in sellingProcess"
                            :key="i"
                            dot-color="secondary"
                            fill-dot
                        >
                            <template v-slot:icon>
                                <span>{{item.id}}</span>
                            </template>
                            <v-card >
                                <v-card-text class="bg-white text--primary">
                                    <p class="text-h6">{{ item.title }}</p>
                                </v-card-text>
                            </v-card>
                        </v-timeline-item>
                    </v-timeline>
                </v-col>
                <v-col>
                    <v-timeline align="center" side="end">
                        <v-timeline-item
                            v-for="(item, i) in buyingProcess"
                            :key="i"
                            dot-color="secondary"
                            fill-dot
                        >
                            <template v-slot:icon>
                                <span>{{item.id}}</span>
                            </template>
                            <v-card class="w-100">
                                <v-card-text class="bg-white text--primary">
                                    <p class="text-h6">{{ item.title }}</p>
                                </v-card-text>
                            </v-card>
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