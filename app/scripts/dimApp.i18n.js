(function() {
  "use strict";

  // See https://angular-translate.github.io/docs/#/guide
  angular.module('dimApp')
    .config(['$translateProvider', function($translateProvider) {
      $translateProvider.useSanitizeValueStrategy('escape');

      $translateProvider
        .translations('en', {
          Level: "Level",
          Weapons: "Weapons",
          Armor: "Armor",
          General: "General",
          Postmaster: "Postmaster",
          Equip: "Equip",
          Store: "Store",
          Vault: "Vault",
          Vanguard: "Vanguard",
          Reputation: "Reputation",
          Intellect: "Intellect",
          Discipline: "Discipline",
          Strength: "Strength",
          Super_cooldown: "Super cooldown",
          Grenade_cooldown: "Grenade cooldown",
          Melee_cooldown: "Melee cooldown",
          tier_progress: "{{progress}} for {{tier}}",
          About: "About",
          'Support DIM': "Support DIM",
          Vendors: "Vendors",
          Support: "Support",
          Settings: "Settings",
          filter_help: "Search item/perk or is:arc",
          'Tag Item': "Tag Item",
          Favorite: "Favorite",
          Keep: "Keep",
          Junk: "Junk",
          Infuse: "Infuse",
          notes_placeholder: "Add notes to this item",
          before_loadout: "Before '{{name}}'",
          'Create Loadout': "Create Loadout",
          loadout_from_equipped: "Equipped",
          'Edit Loadout': "Edit Loadout",
          'Delete Loadout': "Delete Loadout",
          apply_search_loadout: "Items = \"{{query}}\"",
          'Maximize Light': "Maximize Light",
          'Item Leveling': "Item Leveling",
          'Gather Engrams': "Gather Engrams",
          gather_engrams_except_exotics: "Exotics",
          farming_mode: "Farming Mode (move items)",
          restore_all_items: "All Items",
          Loadouts: "Loadouts"
        })
        .translations('it', {
          Level: "Livello",
          Weapons: "Armi",
          Armor: "Armatura",
          General: "Generale",
          Postmaster: "Amministratrice",
          Equip: "Equipaggia",
          Store: "Memorizzare",
          Vault: "Depositi",
          Vanguard: "Avanguardia",
          Reputation: "Reputazione",
          Intellect: "Intelletto",
          Discipline: "Disciplina",
          Strength: "Forza",
          Super_cooldown: "Super tempo di recupero",
          Grenade_cooldown: "Granate tempo di recupero",
          Melee_cooldown: "Corpo a corpo tempo di recupero",
          tier_progress: "{{progress}} per {{tier}}",
          About: "Chi siamo",
          'Support DIM': "Aiutare DIM",
          Vendors: "Mercanti",
          Support: "Aiutare",
          Settings: "Impostazioni",
          'Tag Item': "Elemento Tag",
          Favorite: "Preferito",
          Keep: "Tenere",
          Junk: "Giunca",
          Infuse: "Infondi",
          notes_placeholder: "Aggiungere note a questa voce",
          'Create Loadout': "Creare Loadout",
          loadout_from_equipped: "Fornito",
          'Edit Loadout': "Modifica Loadout",
          'Delete Loadout': "Cancellare Loadout",
          apply_search_loadout: "Elementi = \"{{query}}\"",
          'Maximize Light': "Massimizzare la Luce",
          'Item Leveling': "Elemento di Livellamento",
          'Gather Engrams': "Raccogliere Engram",
          gather_engrams_except_exotics: "Esotiche",
          farming_mode: "Engram a Depositi (Coltura)",
          restore_all_items: "Tutti gli Elementi",
          Loadouts: "Loadouts"
        })
        .translations('de', {
          Weapons: "Waffen",
          Armor: "Rüstung",
          General: "Allgemein",
          Postmaster: "Poststelle",
          Equip: "Ausrüsten",
          Store: "Verstauen",
          Vault: "Tresor",
          Vanguard: "Vorhut",
          Reputation: "Ruf",
          Intellect: "Intellekt",
          Discipline: "Disziplin",
          Strength: "Stärke",
          Super_cooldown: "Super Abklingzeit",
          Grenade_cooldown: "Granaten Abklingzeit",
          Melee_cooldown: "Nahkampf Abklingzeit",
          tier_progress: "{{progress}} für {{tier}}",
          About: "Über",
          'Support DIM': "DIM Unterstützen",
          Vendors: "Händler",
          Support: "Unterstützen",
          Settings: "Einstellungen",
          'Tag Item': "Tag Artikel",
          Favorite: "Favorit",
          Keep: "Behalten",
          Junk: "Trödel",
          Infuse: "Infundieren",
          notes_placeholder: "Hinzufügen von Anmerkungen zu diesem Artikel",
          'Create Loadout': "Loadout erstellen",
          loadout_from_equipped: "Aus angelegter Ausrüstung",
          'Edit Loadout': "Loadout bearbeiten",
          'Delete Loadout': "Loadout löschen",
          apply_search_loadout: "Gegenstand = \"{{query}}\"",
          'Maximize Light': "Licht maximieren",
          'Item Leveling': "Gegenstand aufwerten",
          'Gather Engrams': "Engramme sammeln",
          gather_engrams_except_exotics: "Exotics",
          farming_mode: "Engramme zum Tresor",
          restore_all_items: "Alle Elemente",
          Loadouts: "Loadouts"
        })
        .translations('fr', {
          Level: "Niveau",
          Weapons: "Armes",
          Armor: "Armure",
          General: "Général",
          Postmaster: "Commis des postes",
          Equip: "Équiper",
          Store: "Stocker",
          Vault: "Coffres",
          Vanguard: "Avant-garde",
          Reputation: "Estime",
          Intellect: "Intelligence",
          Discipline: "Discipline",
          Strength: "Force",
          Super_cooldown: "Super délai",
          Grenade_cooldown: "Grenade délai",
          Melee_cooldown: "Mêlée délai",
          tier_progress: "{{progress}} pour {{tier}}",
          About: "À propos",
          'Support DIM': "Soutien DIM",
          Vendors: "Marchands",
          Support: "Soutien",
          Settings: "Paramètres",
          'Tag Item': "Tag Article",
          Favorite: "Préféré",
          Keep: "Garder",
          Junk: "Jonque",
          Infuse: "Infuser",
          notes_placeholder: "Ajouter des notes à cet article",
          'Create Loadout': "Créer Loadout",
          loadout_from_equipped: "Equipée",
          'Edit Loadout': "Modifier Loadout",
          'Delete Loadout': "Effacer Loadout",
          apply_search_loadout: "Articles = \"{{query}}\"",
          'Maximize Light': "Maximiser la Lumière",
          'Item Leveling': "Article Nivellement",
          'Gather Engrams': "Recueillir des Engrammes",
          gather_engrams_except_exotics: "Exotiques",
          farming_mode: "Engrammes Coffres (Agriculture)",
          restore_all_items: "Tous les Articles",
          Loadouts: "Loadouts"
        })
        .translations('es', {
          Level: "Nivel",
          Weapons: "Armas",
          Armor: "Armadura",
          Postmaster: "Administración",
          Equip: "Equipar",
          Store: "Almacenar",
          Vault: "Depósito",
          Vanguard: "Vanguardia",
          Reputation: "Reputación",
          Intellect: "Intelecto",
          Discipline: "Disciplina",
          Strength: "Fuerza",
          Super_cooldown: "Super tiempo",
          Grenade_cooldown: "Granade tiempo",
          Melee_cooldown: "Cuerpo a cuerpo tiempo",
          tier_progress: "{{progress}} por {{tier}}",
          About: "Sobre",
          'Support DIM': "Apoyo DIM",
          Vendors: "Comerciantes",
          Support: "Apoyo",
          Settings: "Configuración",
          'Tag Item': "Elemento de Etiqueta",
          Favorite: "Favorito",
          Keep: "Guardar",
          Junk: "Basura",
          Infuse: "Infundir",
          notes_placeholder: "Agregar notas a este artículo",
          'Create Loadout': "Crear Loadout",
          loadout_from_equipped: "Equipado",
          'Edit Loadout': "Editar Loadout",
          'Delete Loadout': "Borrar Loadout",
          apply_search_loadout: "Artículos = \"{{query}}\"",
          'Maximize Light': "Maximizar la Luz",
          'Item Leveling': "Nivelación Elemento",
          'Gather Engrams': "Recopilar Engramas",
          gather_engrams_except_exotics: "Exóticas",
          farming_mode: "Engramas a Depósito (Agricultura)",
          restore_all_items: "Todos los Artículos",
          Loadouts: "Loadouts"
        })
        .translations('ja', {
          Level: "レベル",
          Weapons: "武器",
          Armor: "よろい",
          General: "全般",
          Postmaster: "ポストマスター",
          Equip: "装備する",
          Vault: "装備",
          Vanguard: "バンガード",
          Reputation: "評価",
          Intellect: "知性",
          Discipline: "鍛錬",
          Strength: "腕力",
          About: "紹介",
          'Support DIM': "サポート DIM",
          Vendors: "ベンダー",
          Support: "サポート",
          Settings: "設定",
          'Tag Item': "タグアイテム",
          Favorite: "本命",
          Keep: "保つ",
          Junk: "ジャンク",
          Infuse: "煎じる",
          notes_placeholder: "このアイテムにメモを追加",
          'Create Loadout': "作る Loadout",
          loadout_from_equipped: "備える",
          'Edit Loadout': "編集 Loadout",
          'Delete Loadout': "削除 Loadout",
          apply_search_loadout: "箇条 = \"{{query}}\"",
          'Maximize Light': "ライトを最大化",
          'Item Leveling': "アイテムの平準化",
          'Gather Engrams': "エングラムを収集",
          gather_engrams_except_exotics: "エキゾチック",
          farming_mode: "エングラムは、 装備 (農業)",
          restore_all_items: "品揃え",
          Loadouts: "Loadouts"
        })
        .translations('pt-br', {
          Level: "Nível",
          Weapons: "Armas",
          Armor: "Armadura",
          General: "Geral",
          Postmaster: "Chefe do Correio",
          Equip: "Equipar",
          Store: "Armazenar",
          Vault: "Cofres",
          Vanguard: "Vanguarda",
          Reputation: "Reputação",
          Intellect: "Intelecto",
          Discipline: "Disciplina",
          Strength: "Força",
          Super_cooldown: "Super tempo",
          Grenade_cooldown: "Granadas tempo",
          Melee_cooldown: "Corpo a corpo tempo",
          tier_progress: "{{progress}} por {{tier}}",
          About: "Sobre",
          'Support DIM': "Apoio DIM",
          Vendors: "Vendedores",
          Support: "Apoio",
          Settings: "Configurações",
          'Tag Item': "Item de Tag",
          Favorite: "Favorito",
          Keep: "Guarda",
          Junk: "Lixo",
          Infuse: "Infundir",
          notes_placeholder: "Adicionar observações a este item",
          'Create Loadout': "Crio Loadout",
          loadout_from_equipped: "Equipado",
          'Edit Loadout': "Editar Loadout",
          'Delete Loadout': "Excluir Loadout",
          apply_search_loadout: "Itens = \"{{query}}\"",
          'Maximize Light': "Maximizar a Luz",
          'Item Leveling': "Nivelamento Item",
          'Gather Engrams': "Reunir Engramas",
          gather_engrams_except_exotics: "Exóticos",
          farming_mode: "Engramas a Cofres (Agricultura)",
          restore_all_items: "Todos os Itens",
          Loadouts: "Loadouts"
        })
        .fallbackLanguage('en');
    }]);
})();
