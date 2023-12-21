-- CreateTable
CREATE TABLE "pokedex" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "is_main_series" BOOLEAN NOT NULL,

    CONSTRAINT "pokedex_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dex_entry" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "dex_number" INTEGER NOT NULL,
    "species_id" UUID NOT NULL,
    "pokedex_id" UUID NOT NULL,

    CONSTRAINT "dex_entry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pokemon_species" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "national_dex_number" INTEGER NOT NULL,
    "order" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "gender_rate" INTEGER NOT NULL,
    "capture_rate" INTEGER NOT NULL,
    "base_happiness" INTEGER NOT NULL,
    "is_baby" BOOLEAN NOT NULL,
    "is_legendary" BOOLEAN NOT NULL,
    "is_mythical" BOOLEAN NOT NULL,
    "hatch_counter" INTEGER NOT NULL,
    "has_gender_differences" BOOLEAN NOT NULL,
    "forms_switchable" BOOLEAN NOT NULL,

    CONSTRAINT "pokemon_species_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "dex_entry_species_id_pokedex_id_key" ON "dex_entry"("species_id", "pokedex_id");

-- CreateIndex
CREATE UNIQUE INDEX "dex_entry_dex_number_pokedex_id_key" ON "dex_entry"("dex_number", "pokedex_id");

-- AddForeignKey
ALTER TABLE "dex_entry" ADD CONSTRAINT "dex_entry_species_id_fkey" FOREIGN KEY ("species_id") REFERENCES "pokemon_species"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dex_entry" ADD CONSTRAINT "dex_entry_pokedex_id_fkey" FOREIGN KEY ("pokedex_id") REFERENCES "pokedex"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
