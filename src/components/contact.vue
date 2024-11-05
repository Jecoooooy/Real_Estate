<template>
    <section 
        id="contact"
        :style="`background-image:linear-gradient(0deg,rgba(255, 255, 255, 0),${primaryColor}), url('./images/contactBackground.jpg');`" 
    >
        <v-container class="d-flex justify-center align-center h-100">
            <div class="contact-container text-secondary">
                <h2 class="text-center ">Work With Us</h2>
                <v-divider color="primary" thickness="5" class="pb-4 mt-4 border-opacity-100"></v-divider>
                <p 
                    class="text-body-1 text-center pb-8"
                >
                    With decades of experience in luxurious Tri Valley real estate, 
                    our team is here to ensure that your dreams are a reality. 
                    Let us guide you through your home buying journey, contact us today!
                </p>
                <v-btn
                    color="secondary"
                    text="contact us"
                    size="large"
                    rounded
                    variant="outlined"
                    @click="contactDialog = true"
                    style="backdrop-filter: blur(12px);"
                ></v-btn>
            </div>
        </v-container>
        <v-dialog v-model="contactDialog" transition="fab-transition" max-width="500px">
            <v-card>
                <v-card-title class="bg-primary d-flex justify-space-between align-center move" >
                    <h4>Send a Message</h4>
                    <v-btn
                        icon="mdi-close"
                        rounded
                        size="small"
                        color="error"
                        density="comfortable"
                        @click="contactDialog = false"
                    ></v-btn>
                </v-card-title>
                <v-card-text>   
                    <v-text-field
                        label="name"
                        variant="underlined"
                        density="comfortable"
                    ></v-text-field>
                    <v-text-field
                        label="phone"
                        variant="underlined"
                        density="comfortable"
                    ></v-text-field>
                    <v-text-field
                        label="Email address"
                        variant="underlined"
                        density="comfortable"
                    ></v-text-field>
                    <v-text-field
                        label="Message"
                        variant="underlined"
                        density="comfortable"
                    ></v-text-field>

                    <v-checkbox

                    >
                        <template v-slot:label >
                        <p >
                                By providing Julie Hansen Partnership your contact information, 
                            you acknowledge and agree to our Privacy Policy and consent to receiving marketing communications, 
                            including through automated calls, texts, and emails, some of which may use artificial or prerecorded voices. 
                            This consent isn’t necessary for purchasing any products or services and you may opt out at any time. To opt out from texts, 
                            you can reply, ‘stop’ at any time. To opt out from emails, you can click on the unsubscribe link in the emails. Message and data rates may apply.
                        </p>
                        </template>
                    </v-checkbox>
                    
                </v-card-text>
                <v-card-actions>
                    <v-btn block color="primary" variant="flat" text="send"></v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </section>
</template>
<script setup>
    import {ref,onMounted,computed} from "vue"
    import { useTheme  } from 'vuetify';

    import { storeToRefs } from 'pinia';
    import { useDataStore } from '../store.js';
    
    const dataStore = useDataStore();
    // const { ComprehensiveMarketingPlanData,windowWidth } = storeToRefs(dataStore);
    
    const theme  = useTheme ();
    const primaryColor = computed(() => theme.current.value.colors.primary);
    const secondaryColor = computed(() => theme.current.value.colors.secondary);

    const contactDialog = ref(false)
</script>
<style>
#contact{
    height: 70svh;
    position: relative;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
.contact-container{
    max-width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.move{
    cursor: grab;
    user-select: none;
}
.move:active{
    cursor: grabbing;
}
.move h4{
    pointer-events: none;
}
</style>