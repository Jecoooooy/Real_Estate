    <template>
        <section id="about">
            <v-container>
            <v-row
                class="pb-4 "
                justify="center"
                align="center"
                v-for="(item, index) in about"
                :key="index"
            >
                <v-col 
                    order="2" 
                    :order-md="item.id % 2 == 0 ? 2 : 1" 
                    md="6" 
                    sm="10" 
                    cols="12"
                >
                    <div>
                        <h5 class="text-center text-secondary text-h5">{{ item.title }}</h5>
                        <br/>
                        <p :class="(windowWidth >= 800 ? 'text-body-1 ' : 'text-body-2 ') + ' text-justify '"> {{ item.content }}</p>
                        <br/>
                        <p   v-if="item.benefits" :class="`text-body-2`">Benefits:</p>
                        <ul v-if="item.benefits" class="text-body-2 pl-4">
                            <br />
                            <li v-for="(list, i) in item.benefits" class="pb-4">
                                {{ list }}
                            </li>
                        </ul>
                    </div>
                </v-col>
                <v-col order="1" :order-md="item.id % 2 == 0 ? 1 : 2" md="6" sm="10" cols="12">
                <div class="photo-container">
                    <div class="photo-card bg-primary">
                    <v-img class="photo" :src="item.image" height="100%" aspect-ratio="1/1">
                    </v-img>
                    </div>
                </div>
                </v-col>
            </v-row>
            </v-container>
        </section>
    </template>
    <script setup>
        import { storeToRefs } from "pinia";
        import { useDataStore } from "../store.js";

        const dataStore = useDataStore();
        const { about, darkMode, windowWidth } = storeToRefs(dataStore);
    </script>
    <style>
    #about {
    padding: 5svh 0;
    }
    .photo-container {
        position: relative;
    }
    .photo-card {
        border-radius: 8px;
        padding: 20px;
        box-shadow: 0 8px 12px #212121bd, 0px 8px 12px #777777c5 inset;
    }

    .photo {
        border-radius: 4px;
        position: relative;
    }
    .photo::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.795),
            rgba(255, 255, 255, 0),
            rgba(0, 0, 0, 0.199),
            rgba(255, 255, 255, 0.349),
            rgba(0, 0, 0, 0.658)
        );
        pointer-events: none;
    }
    .photo::before{
        content: "";
        width: 50%;
        height: 20px;
        border-radius: 0px 0px 10px 10px;
        background-color: #212121;
        position: absolute;
        left: 50%;
        top: 0;
        z-index:20;
        transform: translateX(-50%);
    }
    </style>
