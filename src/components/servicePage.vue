<template>
    <div class="position-relative living-room">
        <div class="bg-secondary photo-overlay position-absolute h-100 w-100 opacity-20" style="z-index:10;"></div>
        <v-parallax
            class="position-relative"
            src="images/living_room.jpg"
            height="600px"
        >
            <v-container>
                <h1 >SERVICES</h1>
            </v-container>
        </v-parallax>
    </div>
</template>
<style>
.living-room h1{
    position: absolute;
    z-index: 11;
    bottom: 20px;
}
</style>