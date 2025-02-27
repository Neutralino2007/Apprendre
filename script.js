// Données stockées directement dans le script
const vocabulary = {
    english: [
        { word: "Aboveboard", translation: "Honnête, légal", example: "" },
        { word: "Advocate", translation: "Prôner", example: "" },
        { word: "Aghast", translation: "Atterré", example: "" },
        { word: "Alike", translation: "Semblable", example: "" },
        { word: "Allotment", translation: "partage/répartition", example: "" },
        { word: "Allude", translation: "Faire allusion", example: "" },
        { word: "Alleviate", translation: "Réduire", example: "" },
        { word: "Angst", translation: "Angoisse", example: "" },
        { word: "Appoint", translation: "Nommer", example: "" },
        { word: "Aught", translation: "quoi que ce soit", example: "" },
        { word: "Attrition", translation: "Usure", example: "" },
        { word: "Awe", translation: "Emerveillement", example: "" },
        { word: "Back out/drop out/step down:", translation: "Se retirer", example: "" },
        { word: "Backdrop", translation: "Décor", example: "" },
        { word: "Behold", translation: "Regarder", example: "" },
        { word: "Belatedly", translation: "Tardivement", example: "" },
        { word: "Belittle", translation: "Minimiser/Rabaisser", example: "" },
        { word: "Beset", translation: "Frapper", example: "" },
        { word: "Besmirch", translation: "Entacher", example: "" },
        { word: "Bestow", translation: "Conférer", example: "" },
        { word: "Bewildered", translation: "Perplexe", example: "" },
        { word: "Bland", translation: "ennuyeux", example: "" },
        { word: "Bleak", translation: "Morne", example: "" },
        { word: "Boisterous", translation: "Turbulent", example: "" },
        { word: "Boon", translation: "Aubaine", example: "" },
        { word: "Budge", translation: "Bouger", example: "" },
        { word: "Callous", translation: "Insensible", example: "" },
        { word: "Chime with", translation: "Faire écho à", example: "" },
        { word: "Clamour", translation: "Clameur", example: "" },
        { word: "Cloyingly", translation: "Insupportablement", example: "" },
        { word: "Coalesce", translation: "Se fondre/s'unir", example: "" },
        { word: "Collude", translation: "Conspirer", example: "" },
        { word: "Complacency", translation: "Suffisance", example: "" },
        { word: "Concur", translation: "Etre d'accord", example: "" },
        { word: "Contemptuous", translation: "Méprisant", example: "" },
        { word: "Contend", translation: "S'affronter pour/prétendre", example: "" },
        { word: "Convene", translation: "Convoquer", example: "" },
        { word: "Crucible", translation: "Epreuve", example: ""},
        { word: "Cryptic", translation: "Enigmatique", example: "" },
        { word: "Cue", translation: "Réplique", example: "" },
        { word: "Cusp", translation: "Pointe", example: "" },
        { word: "Dawn", translation: "Aube", example: "" },
        { word: "Dazzle", translation: "Eblouir", example: "" },
        { word: "Deem", translation: "Juger que", example: "" },
        { word: "Depletion", translation: "Epuisement", example: "" },
        { word: "Devious", translation: "Perfide", example: "" },
        { word: "Differ", translation: "Ne pas être d'accord", example: "" },
        { word: "Disclosure", translation: "Divulgation", example: "" },
        { word: "Discrepancy", translation: "Divergence", example: "" },
        { word: "Dilettante", translation: "Dilettante", example: "" },
        { word: "Din", translation: "Rabâcher", example: "" },
        { word: "Doom", translation: "Condamner", example: "" },
        { word: "Downrigth", translation: "Complet (véritable)", example: "" },
        { word: "Downscale", translation: "Réduire", example: "" },
        { word: "Drab", translation: "Terne", example: "" },
        { word: "Dreadful", translation: "Terrible/affreux", example: "" },
        { word: "Duly", translation: "Dûment", example: "" },
        { word: "Dusk", translation: "Crépuscule", example: "" },
        { word: "Dwell", translation: "Demeurer", example: "" },
        { word: "Dwell on", translation: "S'appesantir", example: "" },
        { word: "Dwindling", translation: "En baisse", example: "" },
        { word: "Eager", translation: "Fervent", example: "" },
        { word: "Earnest", translation: "Sérieux", example: "" },
        { word: "Eerily", translation: "Sinistrement", example: "" },
        { word: "Eerie", translation: "Etrange", example: "" },
        { word: "Elicite", translation: "Susciter", example: "" },
        { word: "Elude", translation: "Echapper à", example: "" },
        { word: "Elusive", translation: "Hors de portée", example: "" },
        { word: "Embolden", translation: "enhardir", example: "" },
        { word: "Embroil in", translation: "Impliquer dans", example: "" },
        { word: "Endowed", translation: "Subventionné", example: "" },
        { word: "Endowement", translation: "Faculté", example: "" },
        { word: "Enhance", translation: "Améliorer/magnifier", example: "" },
        { word: "Entanglement", translation: "Enchevêtrement", example: "" },
        { word: "Epitomize", translation: "Etre le parfait exemple", example: "" },
        { word: "Earnest", translation: "Sérieux", example: ""},
        { word: "Err", translation: "Se tromper", example: "" },
        { word: "Excruciating", translation: "Insoutenable", example: "" },
        { word: "Extoll", translation: "Louer (vanter)", example: "" },
        { word: "Fathom", translation: "Comprendre", example: "" },
        { word: "Feebly", translation: "Faiblement", example: "" },
        { word: "Felon", translation: "Délinquant", example: "" },
        { word: "Felony", translation: "Crime", example: "" },
        { word: "Fiendish", translation: "Monstrueux/complexe", example: "" },
        { word: "Fickle", translation: "Volage", example: "" },
        { word: "Figment", translation: "Fruit de", example: "" },
        { word: "Firmly", translation: "Fermement", example: "" },
        { word: "Flimsy", translation: "Piètre", example: "" },
        { word: "Flabbergasted", translation: "Ahuri", example: "" },
        { word: "Foil", translation: "Eviter", example: "" },
        { word: "Forlorn", translation: "Triste", example: "" },
        { word: "Foreshadow", translation: "Présager", example: "" },
        { word: "Forthwith", translation: "Immédiatement", example: "" },
        { word: "Fray", translation: "Mêlée", example: "" },
        { word: "Fret", translation: "Se tracasser", example: "" },
        { word: "Froth", translation: "Futilités", example: "" },
        { word: "Gingerly", translation: "Avec précaution", example: "" },
        { word: "Glimmer of", translation: "Une petite idée/pas la moindre idée", example: "" },
        { word: "Grinding", translation: "Oppressant", example: "" },
        { word: "Gruesome", translation: "Horrible", example: "" },
        { word: "Hail", translation: "Acclamer", example: "" },
        { word: "Hamper", translation: "Gêner", example: "" },
        { word: "Harbour", translation: "Entretenir (des sentiments)", example: "" },
        { word: "Harrowing", translation: "Atroce", example: "" },
        { word: "Hasten", translation: "Se hâter", example: "" },
        { word: "Hastily", translation: "Hâtivement", example: "" },
        { word: "Haven", translation: "Abri", example: "" },
        { word: "Haze", translation: "Brouillard", example: "" },
        { word: "Haze over", translation: "Etre obscurci", example: "" },
        { word: "Herald", translation: "Annoncer/signe avant coureur", example: "" },
        { word: "Henceforth", translation: "Dorénavant", example: "" },
        { word: "Hiatus", translation: "Interruption", example: "" },
        { word: "High-water mark", translation: "Apogée", example: "" },
        { word: "Hinder", translation: "Gêner", example: "" },
        { word: "Hinge on", translation: "Dépendre", example: "" },
        { word: "Hitherto", translation: "Jusqu'ici", example: "" },
        { word: "Hoax", translation: "Cannular", example: "" },
        { word: "Hunch", translation: "Un présentiment", example: "" },
        { word: "Idly", translation: "Oisivement", example: "" },
        { word: "Incidentally", translation: "De manière annexe", example: "" },
        { word: "Incongruous", translation: "Incongru", example: "" },
        { word: "Indictment", translation: "Inculpation", example: "" },
        { word: "Infringe", translation: "Enfreindre", example: "" },
        { word: "Innocuous", translation: "Inoffensif", example: "" },
        { word: "Insofar", translation: "Dans une telle mesure", example: "" },
        { word: "Ire", translation: "Colère", example: "" },
        { word: "Irksome", translation: "Agaçant", example: "" },
        { word: "Jeopardize", translation: "Mettre en péril", example: "" },
        { word: "Juggernaut", translation: "Pouvoir destructeur/géant", example: "" },
        { word: "Lacklustre", translation: "Terne/sans intérêt", example: "" },
        { word: "Leeway", translation: "Marge de sécurité", example: "" },
        { word: "Leery", translation: "Méfiant", example: "" },
        { word: "Leisure", translation: "Loisir", example: "" },
        { word: "Lenient", translation: "Indulgent", example: "" },
        { word: "Liability", translation: "Responsabilité", example: "" },
        { word: "Likelihood", translation: "Probabilité", example: "" },
        { word: "Lingering", translation: "Persistant", example: "" },
        { word: "Looming", translation: "Imminent", example: "" },
        { word: "Lull into", translation: "Donner un faux sentiment", example: "" },
        { word: "Lurch", translation: "Chanceller/faire une embardée (voiture)", example: "" },
        { word: "Lust for", translation: "Soif de", example: "" },
        { word: "Meddling", translation: "Ingérence", example: "" },
        { word: "Midst", translation: "Au millieu de", example: "" },
        { word: "Mire", translation: "Bourbier", example: "" },
        { word: "Moot", translation: "Stérile (un débat)", example: "" },
        { word: "Moot question", translation: "Sujet discutable", example: "" },
        { word: "Nadir", translation: "Point le plus bas", example: "" },
        { word: "Narrow down", translation: "Réduire, préciser", example: "" },
        { word: "Neat", translation: "Soigné (apparence)", example: "" },
        { word: "Nefarious", translation: "Abominable", example: "" },
        { word: "Nigh", translation: "Proche", example: "" },
        { word: "Nigh on", translation: "Presque (almost)", example: "" },
        { word: "Nimble", translation: "Vif (d'esprit)", example: "" },
        { word: "Notwithstanding", translation: "Nonobstant", example: "" },
        { word: "Off kilter", translation: "Déjanté/de travers", example: "" },
        { word: "On behalf of", translation: "Au nom de", example: "" },
        { word: "Ore", translation: "Minerai", example: "" },
        { word: "Outperform", translation: "Réussir mieux", example: "" },
        { word: "Overhaul", translation: "Remanier", example: "" },
        { word: "Overloaded", translation: "Surchargé", example: "" },
        { word: "Oust", translation: "Virer", example: "" },
        { word: "Paragon", translation: "Modèle", example: "" },
        { word: "Partake", translation: "Participer", example: "" },
        { word: "Pertain", translation: "Concerner", example: "" },
        { word: "Plague of", translation: "Fléau de", example: "" },
        { word: "Plagued by", translation: "Rongé par", example: "" },
        { word: "Pledge", translation: "Promettre", example: "" },
        { word: "Poll", translation: "Scructin", example: "" },
        { word: "Pretence", translation: "Faux-semblant", example: "" },
        { word: "Proclivity", translation: "Propension", example: "" },
        { word: "Proficient", translation: "Compétent", example: "" },
        { word: "Pummel", translation: "Rouer de de coups", example: "" },
        { word: "Push the enveloppe", translation: "Exagérer", example: "" },
        { word: "Push through", translation: "Faire passer", example: "" },
        { word: "Quell", translation: "Réprimander", example: "" },
        { word: "Quibble", translation: "Critiquer", example: "" },
        { word: "Ramble", translation: "Partir en randonnée/radoter", example: "" },
        { word: "Rant", translation: "Diatribe", example: "" },
        { word: "Raw", translation: "Brut", example: "" },
        { word: "Reckless", translation: "Imprudent", example: "" },
        { word: "Reckon", translation: "Estimer", example: "" },
        { word: "Relapse", translation: "Rechute", example: "" },
        { word: "Reluctant", translation: "Réticent", example: "" },
        { word: "Remit", translation: "Attribution", example: "" },
        { word: "Retort", translation: "Rétorquer", example: "" },
        { word: "Riddance", translation: "Débarras", example: "" },
        { word: "Scarcely", translation: "A peine", example: "" },
        { word: "Scold", translation: "Houspiller", example: "" },
        { word: "Shrewd", translation: "Malin", example: "" },
        { word: "Shroud/veil/conceal", translation: "Dissimuler", example: "" },
        { word: "Shrub", translation: "Arbuste", example: "" },
        { word: "Shun", translation: "Eviter", example: "" },
        { word: "Sight", translation: "Vue", example: "" },
        { word: "Simmer", translation: "Mijoter", example: "" },
        { word: "Skim", translation: "Parcourir rapidement", example: "" },
        { word: "Sluice", translation: "Drainer", example: "" },
        { word: "Smattering", translation: "De vague notions", example: "" },
        { word: "Snag", translation: "Hic", example: "" },
        { word: "Snicker", translation: "Ricaner", example: "" },
        { word: "Snide", translation: "Narquois", example: "" },
        { word: "Snippet", translation: "bout/extrait", example: "" },
        { word: "Solely", translation: "Seulement", example: "" },
        { word: "Spokesperson", translation: "Porte parole", example: "" },
        { word: "Spurious", translation: "Fallacieux", example: "" },
        { word: "Stagger", translation: "Sidérer", example: "" },
        { word: "Staple", translation: "De base", example: "" },
        { word: "Starkly", translation: "Extrêmement", example: "" },
        { word: "Startle", translation: "Surprendre", example: "" },
        { word: "Stir", translation: "Mélanger", example: "" },
        { word: "Strew", translation: "Eparpillé", example: "" },
        { word: "Strive", translation: "S'efforcer", example: "" },
        { word: "Stringent", translation: "Rigoureux", example: "" },
        { word: "Strut", translation: "Pavaner", example: "" },
        { word: "Stymie", translation: "Faire obstacle/contrecarrer", example: "" },
        { word: "Surge", translation: "Flot/hausse", example: "" },
        { word: "Surmised", translation: "Présumer", example: "" },
        { word: "Surreptitiously", translation: "Subrepticement", example: "" },
        { word: "Swerve", translation: "Faire une embardée", example: "" },
        { word: "Sway", translation: "Influence(r)", example: "" },
        { word: "Take side", translation: "Prendre parti", example: "" },
        { word: "Tattered", translation: "En piteux état", example: "" },
        { word: "Tedious", translation: "Ennuyeux", example: "" },
        { word: "Teetering", translation: "Vacillant", example: "" },
        { word: "The shackles of", translation: "Les chaînes de", example: "" },
        { word: "Thereby", translation: "Ainsi", example: "" },
        { word: "Therefore", translation: "Par conséquent", example: "" },
        { word: "Thereof", translation: "De celui-ci", example: "" },
        { word: "Thoroughly", translation: "Minutieusement", example: "" },
        { word: "Thwart", translation: "Déjouer", example: "" },
        { word: "To cause a stir", translation: "Faire sensation"},
        { word: "Toll", translation: "Bilan", example: "" },
        { word: "Trickle", translation: "Une poignée de", example: "" },
        { word: "Trickle in", translation: "Arriver au compte goutte", example: "" },
        { word: "Trifling", translation: "Insignifiant", example: "" },
        { word: "Trite", translation: "Banal", example: "" },
        { word: "Turmoil", translation: "Tumulte", example: "" },
        { word: "Tunnel vision", translation: "Esprit étriqué", example: "" },
        { word: "Uneven", translation: "Inégal/irréglier", example: "" },
        { word: "Unfold", translation: "Se dérouler", example: "" },
        { word: "Unheeded", translation: "Ignoré", example: "" },
        { word: "Unravel", translation: "Echouer/résoudre (un mystère)", example: "" },
        { word: "Upend", translation: "Bouleverser", example: "" },
        { word: "Upended", translation: "Bouleversé", example: "" },
        { word: "Upheaval", translation: "Révolte", example: "" },
        { word: "Utmost", translation: "Tout son possible", example: "" },
        { word: "Utter", translation: "Total (complete)", example: "" },
        { word: "Venture", translation: "Avancer une opinion", example: "" },
        { word: "Vested interest", translation: "Intérêt pratique", example: "" },
        { word: "Vie for", translation: "Concourir pour obtenir", example: "" },
        { word: "Vituperative", translation: "Sévérement critique", example: "" },
        { word: "Vouch", translation: "Se porter garant", example: "" },
        { word: "Wary", translation: "Méfiant", example: "" },
        { word: "Wherewithal", translation: "Les moyens nécessaires", example: "" },
        { word: "Widen", translation: "Elargir", example: "" },
        { word: "Wield", translation: "Exercer (autorité)", example: "" },
        { word: "Wince", translation: "Grimacer", example: "" },
        { word: "Wont", translation: "Habitude", example: "" },
        { word: "Wreck", translation: "Epave/ruine/démolir", example: "" },
        { word: "Wrecked", translation: "Détruit", example: "" },
        { word: "Wreak", translation: "Causer", example: "" },
        { word: "Yearning", translation: "Un désir", example: "" },
        { word: "Yield", translation: "Céder", example: "" },
        { word: "Younder", translation: "Là-bas", example: "" }
    ]
};

const expressions = [
    { expression: "To backfire on", translation: "Se retourner contre" },
    { expression: "With the benefit of hindsight", translation: "Rétrospectivement" },
    { expression: "Looking back on it", translation: "Quand j'y repense" },
    { expression: "How come", translation: "Comment se fait-il" },
    { expression: "Foregone", translation: "Couru d'avance" },
    { expression: "At face value", translation: "Au pied de la lettre" },
    { expression: "To send prices soaring", translation: "Causer une envolée des prix" },
    { expression: "Unlikely to be short-lived", translation: "Qui risque fort de durer" },
    { expression: "The crisis is here to stay", translation: "La crise n’est pas prête de s’arrêter" },
    { expression: "We are running out of time", translation: "Le temps presse" },
    { expression: "To blame it all on someone", translation: "Tout mettre sur le dos de quelqu'un" },
    { expression: "To have what it takes", translation: "Avoir les qualités requises" },
    { expression: "Fine-tune", translation: "Peaufiner" },
    { expression: "To be a no-brainer", translation: "Tomber sous le sens" },
    { expression: "To change beyond recognition", translation: "Etre méconnaissables tant le changement est grand" },
    { expression: "The knock-on effects", translation: "Les répercussions" },
    { expression: "To cash in on", translation: "Profiter de" },
    { expression: "To take something with a pinch of salt", translation: "Prendre qqch avec des pincettes" },
    { expression: "To talk consumers into spending more", translation: "Persuader les consommateurs de dépenser plus" },
    { expression: "To grab the headlines", translation: "Faire les gros titres" },
    { expression: "To wreak havoc", translation: "Faire des ravages" },
    { expression: "To have ground to a halt", translation: "Être au point mort" },
    { expression: "Rife", translation: "Répandu" },
    { expression: "To follow suit", translation: "Faire la même chose" },
    { expression: "To increase dramatically", translation: "Augmenter considérablement" },
    { expression: "Slump by", translation: "S'effondrer de" },
    { expression: "To buck the trend", translation: "Ne pas suivre la tendance" },
    { expression: "Ne pouvoir que", translation: "To be bound to" },
    { expression: "To rocket", translation: "Monter en flèche" },
    { expression: "To plummet", translation: "Dégringoler" },
    { expression: "A steadily rising birth-rate", translation: "Un taux de natalité qui augmente régulièrement" },
    { expression: "Diminuer", translation: "To be on the wane" },
    { expression: "To be axed", translation: "Être supprimé" },
    { expression: "To cut back on", translation: "Réduire les dépenses" },
    { expression: "To stem the tide", translation: "Endiguer le flot" },
    { expression: "To be at the helm", translation: "Être aux commandes" },
    { expression: "To phase out", translation: "Éliminer progressivement" },
    { expression: "Alleviate", translation: "Réduire" },
    { expression: "To tip the scales", translation: "Faire pencher la balance" },
    { expression: "To keep soaring", translation: "Qui n’en finit pas d’augmenter" },
    { expression: "To far outweigh", translation: "L’emporter largement" },
    { expression: "Earmarked", translation: "Consacré" },
    { expression: "To pale into insignificance compared with", translation: "Être dérisoire par rapport à" },
    { expression: "To dwarf", translation: "Rendre ridicule" },
    { expression: "Outperform", translation: "Réussir mieux" },
    { expression: "He was conspicuous by his absence", translation: "Il a brillé par son absence" },
    { expression: "They turned a blind eye to", translation: "Ils ont fermé les yeux sur" },
    { expression: "A thorny issue", translation: "Un sujet épineux" },
    { expression: "Pave the way", translation: "Ouvrir la voie à" },
    { expression: "To be left to one’s own devices", translation: "Être livré à soi-même" },
    { expression: "Tall order", translation: "Un défi de taille" },
    { expression: "An uphill battle", translation: "Qui loin d’être évident" },
    { expression: "To head for a disaster", translation: "Courir au désastre" },
    { expression: "To bear the brunt", translation: "Subir les conséquences" },
    { expression: "To foot the bill", translation: "Régler la note" },
    { expression: "What future holds", translation: "Ce que l’avenir réserve" },
    { expression: "Have been shelved", translation: "Ont été abandonnés provisoirement" },
    { expression: "Overnight", translation: "Du jour au lendemain" },
    { expression: "At stake", translation: "En jeu" },
    { expression: "Clout", translation: "Influence" },
    { expression: "Adamant", translation: "Catégorique" },
    { expression: "To be mixed feelings about", translation: "Être partagé" },
    { expression: "To be two minds about whether to", translation: "Hésiter à" },
    { expression: "To be high on the agenda", translation: "Être une des priorités" },
    { expression: "Tantamount to", translation: "Équivaloir à" },
    { expression: "As things stand", translation: "Dans l’état actuel des choses" },
    { expression: "Major upheavals", translation: "Bouleversements majeurs" },
    { expression: "To overhaul", translation: "Remanier" },
    { expression: "Beyond the pale", translation: "Inadmissible" },
    { expression: "At the drop of a hat", translation: "Au pied levé"},
    { expression: "Entertain the idea that", translation: "Nourrir l'idée que"},
    { expression: "From stem to stern", translation: "De fond en comble"},
    { expression: "Harbour the hope of doing", translation: "Nourrir l'espoir de faire"},
    { expression: "On the verge of", translation: "Sur le point de"},
    { expression: "To make a fool of someone", translation: "Ridiculiser"},
    { expression: "On the threshold", translation: "A l'aube de"},
    { expression: "To sit on the fence", translation: "Etre indécis"},
    { expression: "A turf war", translation: "Une guerre de territoire"},
    { expression: "To vote with your feet", translation: "Partir pour montrer son désaccord"},
    { expression: "Cross the threshold", translation: "Franchir le seuil", example: "" },
];

const citations = {
    ti: [
        "-« les traditionalistes y tenaient parce que, petite et incommode, elle éloignait, de ce fait même, les nouveaux riches dont New York commençait à sentir à la fois l’attraction et le danger. » (p.21)",
        "-« Si quelqu’un peut décider quand on peut mettre ou non la cravate noire avec l’habit, c’est Larry Leffert. » (p.26)",
        "-« Tous les messieurs de la loge se retournèrent pour écouter ce qu’allait dire Mr. Jackson, car son autorité sur le chapitre « famille » était aussi incontestée que celle de Lawrence Lefferts sur le chapitre « bon ton ». » (p.27)",
        "-« Archer était décidément nerveux. Il n’était pas allé à son cercle après l’Opéra, — selon la coutume des jeunes élégants » (p.39)",
        "-« Souvenez-vous que nous le faisons parce que c’est bien. » (p.40)",
        "-« Dans la jeunesse de Newland Archer, la société de New York pouvait être comparée à une petite pyramide solide et glissante où aucune fissure apparente ne s’était encore produite. » (p.65)",
        "-« Si nous ne nous tenons pas entre nous, c’est l’effondrement de la société. » (p.67)",
        "-« Tant qu’une famille de notre milieu soutient un de ses membres, on doit considérer la question comme résolue. » (p.72)",
        "-« On fut généralement d’accord à New York pour trouver que la comtesse Olenska avait perdu sa beauté. » (p.75)",
        "-« Archer aimait à penser que seul un vieux New-Yorkais pouvait apprécier justement les nuances qu’il y avait pour New York entre un simple duc et un duc parent des Van der Luyden. » (p.78)",
        "-« - Original ? Nous sommes tous aussi pareils les uns aux autres que ces poupées découpées dans une feuille de papier plié. » (p.98)",
        "-« Quand Archer était arrivé chez Mr. Letterblair il était en parfait accord avec lui ; mais, dans la manière dont ce vieillard égoïste, bien nourri, suprêmement indifférent, exposait la question, il croyait entendre la voix pharisienne de la société, ne songeant qu’à se barricader contre tout ce qui pouvait être pénible. » (p.113)",
        "-« Au-delà de la glissante pyramide qui composait le monde de Mrs. Archer, s’étendait la région hétéroclite où vivaient des artistes. » (p.116)",
        "-« En réalité, ce que sa famille désapprouvait, c’était l’originalité d’aller habiter un quartier si peu élégant. » (p.118)",
        "-« Drôle de quartier pour une femme élégante ! » (p.136)",
        "-« Non, non, ils sont tous pareils : veulent tous faire ce que tous les autres ont fait. » (p.164)",
        "-« Une femme du monde à New York, n’aurait pas appelé sa servante « ma chère », et ne l’aurait pas envoyée faire une course en lui prêtant sa sortie de bal : Archer goûtait un plaisir d’une qualité rare à se trouver dans un monde où l’action jaillissait de l’émotion. » (p.173)",
        "-« Lawrence Lefferts semblait monter la garde pour préserver de toute offense l’implacable divinité du « Bon Ton ». » (p.189)",
        "-« Archer fut frappé de nouveau par le respect religieux que la moins mondaine de ses compatriotes portait au prestige de la toilette. » (p.201)",
        "-« En somme, elle avait toujours eu le même point de vue : celui du monde qui les entourait, celui qu’Archer lui-même avait accepté jusque-là. » (p.205)",
        "-« ils semblaient à Archer que le vieux monde familier reculait aussi. » (p.231)",
        "-« Bientôt une sorte de désespoir l’envahit : ainsi ils étaient là, ensemble, tout près l’un de l’autre […] ; ils auraient aussi bien pu avoir entre eux la moitié du monde. » (p.236)",
        "-« le bilan de son petit univers » (p.247)",
        "-« Couvrir le désordre, c’était la seule chose à quoi la famille en tant qu’institution dût se refuser. » (p.259)",
        "-« Maintenant, May murmurait tranquillement, exacte reproduction de sa mère ; mystérieusement, et par suite du même développement, elle tendait à faire de lui un second Mr. Welland. » (p.275)"
    ],
    ttp: [
        "« La piété passait pour justice, l'impiété pour un crime et une injustice. Qui manquait à la Religion cessait d'être un citoyen.» (chap. 17, §8, p. 108)",
        "« Le pouvoir de commandement chez les Hébreux appartenait donc à Dieu seul » (chap. 17, §8, P. 107)",
        "l'arche d'alliance était portée au milieu de l'armée, de façon que le peuple, combattant comme s'il voyait son Roi présent, donnât tout ce qu'il avait de force.» (chap. XVII, § 13, p. 115)",
        "« Dans cet État donc le droit civil et la Religion (...), étaient une seule et même chose. » (chap. XVII, §8, p. 108)",
        "« Quoi de plus insupportable en effet pour les rois que de régner à titre précaire et d'avoir à souffrir un État dans l'État » (chap. XVII, §29, p. 139)",
        "« il est pernicieux, tant pour la religion que pour l'État, d'accorder aux ministres du culte le droit de décréter quoi que ce soit ou de traiter les affaires de l'État. » (chap. XVII, §6, p. 153)",
        "« la ruine de l'État sera encore beaucoup plus rapide si des particuliers revendiquent séditieusement le droit de Dieu.» (chap. XIX, § 18, p. 181)",
        "« Pour le moment je veux montrer que la religion n'acquiert force de droit que par le décret de ceux qui ont le droit de régir l'État ; que le règne singulier de Dieu sur les hommes ne s'établit que par ceux qui détiennent et possèdent le pouvoir politique, et qu'en outre l'exercice du culte religieux et les formes extérieures de la piété doivent se régler sur la paix et l'utilité de l'État, d'où suit qu'ils doivent être réglés par le souverain seul et que le souverain doit en être l'interprète. »> (chap. XIX, §2, p. 166)",
        "« Moins il est laissé aux hommes de liberté de juger, plus on s'écarte de l'état le plus naturel, et plus le gouvernement a de violence » (chap. XX, § 14, p. 203)",
        "« Il est certain que la piété envers la patrie est la plus haute sorte de piété qu'un homme puisse montrer » (chap. 19, §9, p. 173)",
        "- «Nous sommes tenus d'exécuter absolument tout ce qu'enjoint le souverain, alors même que ses commandements seraient les plus absurdes du monde» (chap XVI, p.76)",
        "- «Ce que l'on ne peut prohiber, il faut nécessairement le permettre» (chap XX, p.198)",
        "- «le droit de chacun s'étend jusqu'où s'étend la puissance déterminée qui lui appartient» (chap XVI, p66)",
        "- «du droit naturel de l'individu, lequel s'étend aussi loin que son désir et sa puissance» (préface, p.57)",
        "- «l'ennemi est celui qui vit en dehors de la cité et ne reconnaît, ni en qualité d'allié, ni en qualité de sujet, le gouvernement qu'elle a institué» (chap XVI, p.83)",
        "- «les vrais perturbateurs sont ceux qui, dans un État libre, veulent détruire la liberté de jugement qu'il est impossible de comprimer» (chap XX, p.205)",
        "- «Aussi bien les gouvernants que ceux qui sont gouvernés sont tous des hommes, en effet, c'est-à-dire des êtres enclins à abandonner le travail pour chercher le plaisir. [...] le désir du changement, la colère sans retenue, le mépris de la pauvreté poussent les hommes et combien ces passions occupent et agitent leurs âmes» (chap XVII, p.102)",
        "- «Il est impossible d'enlever aux hommes la liberté de dire ce qu'ils pensent» (chap XX, p.205)",
        "- «pour vivre dans la sécurité et le mieux possible, les hommes ont dû nécessairement aspirer à s'unir en un corps» (chap XVII, p.70)",
        "- « la liberté n'est qu'à celui qui de son entier consentement vit sous la seule conduite de la raison» (chap XVI, p.78)"
    ],
    sct: [
        "-thebaines ds 7 : prient dieux sur « le tertre où se dressent les statues des dieux » p 146",
        "-mais fais plus ; quitte ces statues et adresse aux dieux la seule prière qui vaille : qu'ils combattent avec nous « eteocle répond au femmes - 7 p 151",
        "-et maintenant une mer de maux vers nous pousse les larmes. Si l'une s'écroule, elle en soulève une autre trois fois plus puissante, qui gronde et bouillonne autour de la poupe de notre cité » 7 p 166",
        "-Ce qui se fait hors de la maison est l'affaire des hommes-que la femme n'y donne point sa voix ! Reste chez toi et cesse de nous nuire » 7",
        "-Il doit dire ce que l'heure exige, le chef qui tout à sa besogne, au gouvernail de la cité, tient la barre en main, sans laisser dormir ses paupières » 7 p 143 : étéocle guide en temps de guerre",
        "-Mais cette fois, quiconque n'entendra pas mon ordre, homme, femme - ou tout autre - verra un arrêt de mort tôt délibéré sur lui, et n’échappera pas, j'en réponds, aux pierres meurtrières du peuple » 7 p 148 (étéocle)",
        "-Je clame ici ma peur et mes douleurs immenses ! femmes dans un choeur : pas d'individu (antigone anachronique) 7 p 145",
        "Héros singularisés ds 7 mais tjr service de la commu Héros modérés (côté thèbes) VS Héros pleins d’hubris (côté Argien) -> héros représentants de communautés",
        "-lesbaines essayent de dissuader eteocle"
    ],
    s: [
        "-nous nous honorons d'être de race argienne et de descendre d'une génisse féconde « supp p60",
        "-c'est en prudent pilote qu'ici vous a conduites le vieux père en qui vous avez foi, et maintenant, à terre, ma prévoyance encore vous engage à garder mes avis bien gravés en vous « supp p 57 : danaos guide",
        "-c'est à lui [danaos] de décider d'abord où nous devons prendre logis et quel choix nous vaudra bon accueil » supp p 84",
        "-et danaos, le père qui inspiré tous nos dessins, qui inspira notre révolte, a pesé tous les coups, et, parmi toutes les douleurs, choisi celle du moins qui sauvait notre gloire » supp p 51",
        "-Allons, divins auteurs de ma naissance, voyez où est le Droit : exaucez-nous » supp p 53 (plus d'individu, condition commune, choeur)",
        "- le Nil et les Bouches n'auront plus l'hommage de nos hymnes « supp p 86 doivent abandonner leurs dieux",
        "-C'est toi la cité ; c'est toi le conseil » supp p 64",
        "-Ah! Je voudrais mourir, pendue, trouver la mort dans un lacet avant qu'un mari exécré portât la main sur mon corps » supp p 78 : mariage = captivité",
        "-pleines d’une horreur innée de l’homme, nous détestons l’hymen des enfants d’Egyptos et leur sacrilège démence » supp p 51 : communauté du destin",
        "-Je t’invite à gagner la galère aux flancs courbes , et vite! nul retard! Quand on traîne une rebelle, on n’épargne pas ses cheveux » supp p 81"
    ]
};




// ************************************************************
// ************************************************************





// Fonction pour naviguer entre les pages
function navigateTo(page) {
    window.location.href = page;
}

// Fonction pour naviguer vers une catégorie spécifique
function scrollToCategory(category) {
    const element = document.getElementById(category);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Fonction pour afficher les flashcards
function displayFlashcards(words, direction) {
    const content = document.getElementById('content');
    content.innerHTML = `
        <div id="flashcard-container" class="flashcard-container"></div>
        <div class="buttons">
            <button class="next-button" onclick="nextCard()">Mot suivant</button>
            <button class="home-button" onclick="navigateTo('index.html')">Revenir à l'accueil</button>
        </div>
    `;
    const container = document.getElementById('flashcard-container');
    let index = Math.floor(Math.random() * words.length);

    function showCard() {
        if (words.length === 0) {
            container.innerHTML = "<p>Aucun vocabulaire disponible.</p>";
            return;
        }
        const card = document.createElement('div');
        card.className = 'flashcard';
        card.innerHTML = `
            <div class="flashcard-inner">
                <div class="flashcard-front">
                    <p>${direction === 'toTarget' ? words[index].word : words[index].translation}</p>
                </div>
                <div class="flashcard-back">
                    <p>${direction === 'toTarget' ? words[index].translation : words[index].word}</p>
                </div>
            </div>
        `;
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });
        container.innerHTML = '';
        container.appendChild(card);
    }

    window.nextCard = function() {
        index = Math.floor(Math.random() * words.length);
        showCard();
    }

    showCard();
}

// Fonction pour afficher le vocabulaire
function viewVocabulary() {
    const language = 'english';
    const words = vocabulary[language];
    if (!words || words.length === 0) {
        document.getElementById('content').innerHTML = "<p>Aucun vocabulaire disponible pour cette langue.</p>";
        return;
    }
    const content = document.getElementById('content');
    content.innerHTML = `
        <h2>Vocabulaire (${language})</h2>
        <table class="vocabulary-table">
            <thead>
                <tr>
                    <th>Mot</th>
                    <th>Traduction</th>
                    <th>Exemple</th>
                </tr>
            </thead>
            <tbody>
                ${words.map(word => `
                    <tr>
                        <td>${word.word}</td>
                        <td>${word.translation}</td>
                        <td>${word.example}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

// Fonction pour afficher les expressions
function displayExpressions() {
    const content = document.getElementById('expressionsList');
    content.innerHTML = expressions.map(expr => `
        <div class="expression-item">
            <p><strong>${expr.expression}</strong>: ${expr.translation}</p>
        </div>
    `).join('');
}

// Fonction pour afficher les citations
function displayCitations() {
    const content = document.getElementById('citationsList');
    content.innerHTML = `
        <h2 id="ti">Le TI</h2>
        ${citations.ti.map(citation => `<div class="citation-item">${citation}</div>`).join('')}
        <h2 id="ttp">Le TTP</h2>
        ${citations.ttp.map(citation => `<div class="citation-item">${citation}</div>`).join('')}
        <h2 id="sct">Les SCT</h2>
        ${citations.sct.map(citation => `<div class="citation-item">${citation}</div>`).join('')}
        <h2 id="s">Les S</h2>
        ${citations.s.map(citation => `<div class="citation-item">${citation}</div>`).join('')}
    `;
}

// Ajouts
let currentQuestionIndex = 0;
let score = 0;
let questions = [];

function startTest() {
    const numQuestions = parseInt(document.getElementById('numQuestions').value, 20);
    const language = 'english';
    const words = vocabulary[language];

    if (numQuestions > words.length) {
        alert("Le nombre de questions demandé est supérieur au nombre de mots disponibles.");
        return;
    }

    // Sélectionner aléatoirement des mots sans répétition
    questions = [];
    const selectedIndices = new Set();
    while (selectedIndices.size < numQuestions) {
        const randomIndex = Math.floor(Math.random() * words.length);
        selectedIndices.add(randomIndex);
    }
    selectedIndices.forEach(index => questions.push(words[index]));

    // Initialiser le test
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('test-setup').style.display = 'none';
    document.getElementById('test-container').style.display = 'block';
    document.getElementById('results').style.display = 'none';
    showQuestion();
}

function showQuestion() {
    const questionElement = document.getElementById('question');
    const feedbackElement = document.getElementById('feedback');
    const nextButton = document.getElementById('next-button');

    if (currentQuestionIndex >= questions.length) {
        showResults();
        return;
    }

    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML = currentQuestionIndex % 2 === 0
        ? `Traduisez : ${currentQuestion.word}`
        : `Quel est le mot pour : ${currentQuestion.translate}`;

    feedbackElement.innerHTML = '';
    nextButton.style.display = 'none';
    document.getElementById('answer').value = '';
    document.getElementById('answer').focus();
}

function submitAnswer() {
    const userAnswer = document.getElementById('answer').value.trim().toLowerCase();
    const currentQuestion = questions[currentQuestionIndex];
    const correctAnswer = currentQuestion[currentQuestionIndex % 2 === 0 ? 'translation' : 'word'].toLowerCase();

    if (userAnswer === correctAnswer) {
        score++;
        document.getElementById('feedback').innerHTML = 'Correct !';
    } else {
        document.getElementById('feedback').innerHTML = `Faux. La réponse correcte était : ${correctAnswer}`;
    }

    document.getElementById('next-button').style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;
    const direction = document.getElementById('direction').value;
    showQuestion();
}

function showResults() {
    document.getElementById('test-container').style.display = 'none';
    document.getElementById('results').style.display = 'block';
    document.getElementById('score').innerHTML = `Votre score : ${score} / ${questions.length}`;
}

function restartTest() {
    document.getElementById('test-setup').style.display = 'block';
    document.getElementById('results').style.display = 'none';
}

// Chargement des pages
document.addEventListener('DOMContentLoaded', function() {
    const path = window.location.pathname.split('/').pop();
    if (path === 'learn.html') {
        const language = 'english';
        const direction = 'toSource'; // Vous pouvez changer cela selon vos besoins
        const words = vocabulary[language];
        if (!words || words.length === 0) {
            document.getElementById('content').innerHTML = "<p>Aucun vocabulaire disponible pour cette langue.</p>";
            return;
        }
        displayFlashcards(words, direction);
    } else if (path === 'test.html') {
        startTest();
    } else if (path === 'view.html') {
        viewVocabulary();
    } else if (path === 'expressions.html') {
        displayExpressions();
    } else if (path === 'citations.html') {
        displayCitations();
    }
});
