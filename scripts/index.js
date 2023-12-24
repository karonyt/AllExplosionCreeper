import { world, system } from "@minecraft/server";

world.beforeEvents.explosion.subscribe((ev) => {
    if (ev.source?.typeId !== `minecraft:creeper`) return;
    world.getAllPlayers().forEach(p => {
        system.run(() => {
            world.getDimension(p.dimension.id).createExplosion(p.location, 3);
        });
    });
});
