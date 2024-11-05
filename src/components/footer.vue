<template>
    <v-footer id="footer-section">
        <v-container>
            <v-row justify="center">
                <v-col cols="12" sm="6" md="6" lg="5"   class="partnership">
                    <h3>Julie Hansen Partnership</h3>
                    <br>
                    <p>
                        An elite group of the East Bay’s most talented and visionary real estate professionals believed buyers and sellers deserved more from their real estate company. 
                        More service. More resources. More integrity. More global reach. In a word, more of everything people should expect when they buy or sell their homes.
                    </p>
                    <br><br>
                    <h3>ADDRESS</h3>
                    <br>
                    <p>4733 Chabot Drive #100 Pleasanton, CA 94588</p>
                    <p>Julie Hansen-Orvis | CA DRE# 00934447</p>
                    <br><br>
                    <h3>CONTACT INFORMATION</h3>
                    <br>
                    <p>(925) 553-6707</p>
                    <p>luxuryhomesinwc@icloud.com</p>
                    <br><br>
                    <div>
                        <v-btn color="primary" icon="mdi-facebook"></v-btn>
                        <v-btn class="ml-4" color="primary" icon="mdi-linkedin"></v-btn>
                    </div>
                </v-col>
                <v-col cols="12" sm="6" md="6" lg="5" >
                    <h3>Newsletter</h3>
                    <br>
                    <p>Subscribe to our Newsletter for latest news and updates. Stay tuned! </p>
                    <br>
                    <br>
                    <v-text-field
                        label="Email Address"
                        variant="underlined"
                    ></v-text-field>
                    <v-checkbox
                    
                    >
                        <template v-slot:label>
                            By providing Julie Hansen Partnership your contact information, 
                        you acknowledge and agree to our Privacy Policy and consent to receiving marketing communications, 
                        including through automated calls, texts, and emails, some of which may use artificial or prerecorded voices. 
                        This consent isn’t necessary for purchasing any products or services and you may opt out at any time. To opt out from texts, 
                        you can reply, ‘stop’ at any time. To opt out from emails, you can click on the unsubscribe link in the emails. Message and data rates may apply.
                        </template>
                    </v-checkbox>
                    <v-btn
                        variant="outlined"
                        size="large"
                        block
                        text="subscribe"
                    ></v-btn>
                </v-col>
                <v-col cols="12">
                    
                    <p class="text-center">Website Designed & Developed by Luxury Presence | Copyright {{year}} | Privacy Policy</p>

                </v-col>
            </v-row>
        </v-container>
    </v-footer>
</template>
<script setup>
    import { ref } from "vue";
    const year = new Date().getFullYear() 
</script>
<style>
.partnership{
	line-height: 25px;
}
#footer-section{
	padding:5svh 0;
}
</style>