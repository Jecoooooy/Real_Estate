<template>
    <section>
        <div class="bg-primary" >        
            <h2 class="text-center text-h3 text-secondary"> Comprehensive Marketing Plan</h2>
        </div>
        <v-container>
            <v-row >
                <v-col xl="3"
                    v-for="(item,index) in ComprehensiveMarketingPlanData"
                >
                    <v-card >
                        <v-card-item>
                            <v-img 
                                :src="item.image"
                                height="300px"
                            ></v-img>
                        </v-card-item>
                        <v-card-title class="text-center text-h4">{{ item.title }}</v-card-title>
                        <v-card-subtitle class="text-center text-h6">{{ item.subTitle }}</v-card-subtitle>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>
<script setup>
    import {ref,onMounted} from "vue"
    import { storeToRefs } from 'pinia';
    import { useDataStore } from '../store.js';

    const dataStore = useDataStore();
    const { ComprehensiveMarketingPlanData } = storeToRefs(dataStore);


</script>