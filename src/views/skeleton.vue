<template>

    <div class="flex  skeleton-conteiner" v-for="i in 2" >
            <div class="flex column skeleton-card" v-for="i in 4" >
                <Skeletor height="194" width="326" />
                <Skeletor circle size="30" />
                <Skeletor height="70" width="326" class="descrip"/>
            </div>


    </div>
</template>
