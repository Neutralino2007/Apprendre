// Données stockées directement dans le script
const vocabulary = {
    english: [
        { word: "A millstone, yoke around you neck", translation: "Problème qui devient un fardeau", example: "The debt became a millstone around his neck, preventing him from pursuing his dreams." },
        { word: "Aboveboard", translation: "Honnête, légal", example: "The deal was completely aboveboard, with no hidden fees or conditions." },
        { word: "Advocate", translation: "Prôner", example: "She advocates for better healthcare policies in the region." },
        { word: "Aghast", translation: "Atterré", example: "He was aghast at the sight of the destruction caused by the hurricane." },
        { word: "Alike", translation: "Semblable", example: "The twins look so much alike that even their parents sometimes confuse them." },
        { word: "Alleviate", translation: "Réduire", example: "The new policy aims to alleviate poverty in rural areas." },
        { word: "Allotment", translation: "partage, répartition", example: "Each family received an allotment of land to cultivate." },
        { word: "Allude", translation: "Faire allusion", example: "The speaker alluded to the recent scandal without directly mentioning it." },
        { word: "An unmitigated disaster", translation: "A complete failure or a full-blown catastrophe", example: "The product launch was an unmitigated disaster, with nothing going as planned." },
        { word: "Angst", translation: "Angoisse", example: "Teenagers often experience angst about their future and identity." },
        { word: "Appoint", translation: "Nommer", example: "The board decided to appoint a new CEO to lead the company." },
        { word: "Attrition", translation: "Usure", example: "The long war led to the attrition of both armies, leaving them weakened." },
        { word: "Aught", translation: "quoi que ce soit", example: "He didn't care for aught but his own success." },
        { word: "Awe", translation: "Emerveillement", example: "The grandeur of the mountains filled them with awe." },
        { word: "Back out, drop out, step down:", translation: "Se retirer", example: "He decided to back out of the deal at the last minute." },
        { word: "Backdrop", translation: "Décor", example: "The political drama unfolded against the backdrop of economic crisis." },
        { word: "Behold", translation: "Regarder", example: "Behold the beauty of the sunset over the ocean." },
        { word: "Belatedly", translation: "Tardivement", example: "She belatedly realized that she had forgotten her friend's birthday." },
        { word: "Belittle", translation: "Minimiser, Rabaisser", example: "He belittled her achievements, making her feel insignificant." },
        { word: "Beset", translation: "Frapper", example: "The small village was beset by a series of natural disasters." },
        { word: "Besmirch", translation: "Entacher", example: "The scandal besmirched his reputation, making it hard for him to find work." },
        { word: "Bestow", translation: "Conférer", example: "The king decided to bestow a knighthood upon the brave soldier." },
        { word: "Bewildered", translation: "Perplexe", example: "The complex instructions left the students bewildered." },
        { word: "Bland", translation: "ennuyeux", example: "The food was so bland that it lacked any distinctive flavor." },
        { word: "Bleak", translation: "Morne", example: "The landscape was bleak, with no signs of life for miles." },
        { word: "Boisterous", translation: "Turbulent", example: "The boisterous crowd cheered loudly as the team scored the winning goal." },
        { word: "Boon", translation: "Aubaine", example: "The new tax law was a boon for small businesses." },
        { word: "Budge", translation: "Bouger", example: "No matter how hard he pushed, the heavy rock wouldn't budge." },
        { word: "Callous", translation: "Insensible", example: "His callous remarks about the homeless shocked everyone." },
        { word: "Chime with", translation: "Faire écho à", example: "Her views on environmental protection chime with those of the younger generation." },
        { word: "Clamour", translation: "Clameur", example: "The clamour of the protesters could be heard from blocks away." },
        { word: "Cloyingly", translation: "Insupportablement", example: "The movie's cloyingly sweet ending left many viewers unsatisfied." },
        { word: "Coalesce", translation: "Se fondre, s'unir", example: "The different factions coalesced into a single, unified movement." },
        { word: "Collude", translation: "Conspirer", example: "The two companies were accused of colluding to fix prices." },
        { word: "Complacency", translation: "Suffisance", example: "Complacency in the workplace can lead to a decline in productivity." },
        { word: "Concur", translation: "Etre d'accord", example: "I concur with your assessment of the situation." },
        { word: "Contemptuous", translation: "Méprisant", example: "She gave him a contemptuous look before turning away." },
        { word: "Contend", translation: "S'affronter pour, prétendre", example: "The two teams will contend for the championship title next week." },
        { word: "Convene", translation: "Convoquer", example: "The committee will convene next Monday to discuss the new policy." },
        { word: "Crucible", translation: "Epreuve", example: "The war was a crucible that tested the nation's resolve." },
        { word: "Cryptic", translation: "Enigmatique", example: "The cryptic message left everyone puzzled about its meaning." },
        { word: "Cue", translation: "Réplique", example: "The actor missed his cue and entered the stage too early." },
        { word: "Cusp", translation: "Pointe", example: "The company is on the cusp of a major breakthrough in technology." },
        { word: "Dawn", translation: "Aube", example: "They set out at dawn to avoid the heat of the day." },
        { word: "Dazzle", translation: "Eblouir", example: "The bright lights of the city dazzled the young girl from the countryside." },
        { word: "Deem", translation: "Juger que", example: "The court deemed the evidence insufficient to convict the defendant." },
        { word: "Depletion", translation: "Epuisement", example: "The depletion of natural resources is a major concern for environmentalists." },
        { word: "Devious", translation: "Perfide", example: "His devious plan to undermine his colleague was eventually uncovered." },
        { word: "Differ", translation: "Ne pas être d'accord", example: "The two experts differ on the best approach to solving the problem." },
        { word: "Dilettante", translation: "Dilettante", example: "He was a dilettante in the arts, dabbling in painting, music, and sculpture without mastering any." },
        { word: "Din", translation: "Rabâcher", example: "The din of the construction work made it impossible to concentrate." },
        { word: "Disclosure", translation: "Divulgation", example: "The disclosure of confidential information led to a major scandal." },
        { word: "Discrepancy", translation: "Divergence", example: "There was a noticeable discrepancy between the two reports." },
        { word: "Doom", translation: "Condamner", example: "The project was doomed from the start due to poor planning." },
        { word: "Downrigth", translation: "Complet (véritable)", example: "His behavior was downright rude and unacceptable." },
        { word: "Downscale", translation: "Réduire", example: "The company decided to downscale its operations to cut costs." },
        { word: "Drab", translation: "Terne", example: "The drab colors of the room made it feel gloomy and unwelcoming." },
        { word: "Dreadful", translation: "Terrible, affreux", example: "The movie was so dreadful that many people walked out before it ended." },
        { word: "Duly", translation: "Dûment", example: "The documents were duly signed and submitted to the authorities." },
        { word: "Dusk", translation: "Crépuscule", example: "They enjoyed a peaceful walk at dusk, watching the sun set over the horizon." },
        { word: "Dwell on", translation: "S'appesantir", example: "She tends to dwell on her mistakes, which makes it hard for her to move forward." },
        { word: "Dwell", translation: "Demeurer", example: "The memory of that day still dwells in his mind." },
        { word: "Dwindling", translation: "En baisse", example: "The dwindling population of the village is a cause for concern." },
        { word: "Eager", translation: "Fervent", example: "The children were eager to open their presents on Christmas morning." },
        { word: "Earnest", translation: "Sérieux", example: "She spoke in an earnest tone, showing how much she cared about the issue." },
        { word: "Eerie", translation: "Etrange", example: "The eerie silence in the abandoned house made her feel uneasy." },
        { word: "Eerily", translation: "Sinistrement", example: "The wind howled eerily through the trees, creating a spooky atmosphere." },
        { word: "Elicite", translation: "Susciter", example: "The teacher's question elicited a lively discussion among the students." },
        { word: "Elude", translation: "Echapper à", example: "The criminal managed to elude the police for several months." },
        { word: "Elusive", translation: "Hors de portée", example: "The elusive goal of world peace seems harder to achieve every year." },
        { word: "Embolden", translation: "enhardir", example: "The success of the first project emboldened the team to take on more ambitious challenges." },
        { word: "Embroil in", translation: "Impliquer dans", example: "The scandal embroiled several high-ranking officials in controversy." },
        { word: "Endowed", translation: "Subventionné", example: "The university is endowed with a large fund to support research." },
        { word: "Endowement", translation: "Faculté", example: "Her natural endowement for music was evident from a young age." },
        { word: "Enhance", translation: "Améliorer, magnifier", example: "The new software enhances the user experience by making it more intuitive." },
        { word: "Entanglement", translation: "Enchevêtrement", example: "The political entanglement made it difficult to pass any new legislation." },
        { word: "Epitomize", translation: "Etre le parfait exemple", example: "She epitomizes the ideal leader, with her vision and determination." },
        { word: "Err", translation: "Se tromper", example: "To err is human, but to forgive is divine." },
        { word: "Excruciating", translation: "Insoutenable", example: "The excruciating pain in his leg made it impossible for him to walk." },
        { word: "Extoll", translation: "Louer (vanter)", example: "The coach extolled the virtues of hard work and dedication to his team." },
        { word: "Fathom", translation: "Comprendre", example: "It's hard to fathom why anyone would make such a reckless decision." },
        { word: "Feebly", translation: "Faiblement", example: "He feebly attempted to lift the heavy box but couldn't manage it." },
        { word: "Felon", translation: "Délinquant", example: "The felon was sentenced to ten years in prison for his crimes." },
        { word: "Felony", translation: "Crime", example: "Committing a felony can result in severe legal consequences." },
        { word: "Fickle", translation: "Volage", example: "The fickle weather made it difficult to plan outdoor activities." },
        { word: "Fiendish", translation: "Monstrueux, complexe", example: "The fiendish puzzle took hours to solve, but it was worth it in the end." },
        { word: "Figment", translation: "Fruit de", example: "The monster in the story was just a figment of the child's imagination." },
        { word: "Firmly", translation: "Fermement", example: "She firmly believes that education is the key to success." },
        { word: "Flabbergasted", translation: "Ahuri", example: "I was flabbergasted when I heard the news of their sudden marriage." },
        { word: "Flimsy", translation: "Piètre", example: "The flimsy excuse he gave for being late was not convincing." },
        { word: "Foil", translation: "Eviter", example: "The security team managed to foil the attempted robbery." },
        { word: "Foreshadow", translation: "Présager", example: "The dark clouds foreshadowed the coming storm." },
        { word: "Forlorn", translation: "Triste", example: "The forlorn expression on her face revealed her deep sadness." },
        { word: "Forthwith", translation: "Immédiatement", example: "The judge ordered the prisoner to be released forthwith." },
        { word: "Fray", translation: "Mêlée", example: "The political debate quickly turned into a fray of accusations and insults." },
        { word: "Fret", translation: "Se tracasser", example: "She tends to fret over small details, which can be exhausting." },
        { word: "Froth", translation: "Futilités", example: "The froth of the waves sparkled in the sunlight." },
        { word: "Gingerly", translation: "Avec précaution", example: "He gingerly picked up the fragile vase, afraid it might break." },
        { word: "Glimmer of", translation: "Une petite idée, pas la moindre idée", example: "There was a glimmer of hope that the situation might improve." },
        { word: "Grinding", translation: "Oppressant", example: "The grinding noise of the machinery made it hard to concentrate." },
        { word: "Gruesome", translation: "Horrible", example: "The gruesome details of the crime shocked the entire community." },
        { word: "Hail", translation: "Acclamer", example: "The crowd hailed the victorious team as they returned home." },
        { word: "Hamper", translation: "Gêner", example: "The bad weather hampered their efforts to complete the construction on time." },
        { word: "Harbour", translation: "Entretenir (des sentiments)", example: "She harboured a deep resentment towards her former boss." },
        { word: "Harrowing", translation: "Atroce", example: "The harrowing experience of being lost in the wilderness stayed with him for years." },
        { word: "Hasten", translation: "Se hâter", example: "They hastened to finish the project before the deadline." },
        { word: "Hastily", translation: "Hâtivement", example: "He hastily packed his bags and left for the airport." },
        { word: "Haven", translation: "Abri", example: "The small cabin in the woods was a haven of peace and tranquility." },
        { word: "Haze over", translation: "Etre obscurci", example: "" },
        { word: "Haze", translation: "Brouillard", example: "" },
        { word: "Henceforth", translation: "Dorénavant", example: "" },
        { word: "Herald", translation: "Annoncer, signe avant coureur", example: "" },
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
        { word: "Juggernaut", translation: "Pouvoir destructeur, géant", example: "" },
        { word: "Lacklustre", translation: "Terne, sans intérêt", example: "" },
        { word: "Leery", translation: "Méfiant", example: "" },
        { word: "Leeway", translation: "Marge de sécurité", example: "" },
        { word: "Leisure", translation: "Loisir", example: "" },
        { word: "Lenient", translation: "Indulgent", example: "" },
        { word: "Liability", translation: "Responsabilité", example: "" },
        { word: "Likelihood", translation: "Probabilité", example: "" },
        { word: "Lingering", translation: "Persistant", example: "" },
        { word: "Looming", translation: "Imminent", example: "" },
        { word: "Lull into", translation: "Donner un faux sentiment", example: "" },
        { word: "Lurch", translation: "Chanceller, faire une embardée (voiture)", example: "" },
        { word: "Lust for", translation: "Soif de", example: "" },
        { word: "Make a point", translation: "Faire une remarque", example: "" },
        { word: "Make headway", translation: "Faire des progrès dans son entreprise", example: "" },
        { word: "Make inroads", translation: "Faire des progrès", example: "" },
        { word: "Make up for", translation: "Se faire pardoner pour, rattraper le temps perdu", example: "" },
        { word: "Meddling", translation: "Ingérence", example: "" },
        { word: "Midst", translation: "Au millieu de", example: "" },
        { word: "Mire", translation: "Bourbier", example: "" },
        { word: "Misgivings", translation: "Doutes", example: "" },
        { word: "Miss the point", translation: "Ne pas comprendre", example: "" },
        { word: "Moot question", translation: "Sujet discutable", example: "" },
        { word: "Moot", translation: "Stérile (un débat)", example: "" },
        { word: "More at length", translation: "Plus longuement", example: "" },
        { word: "Nadir", translation: "Point le plus bas", example: "" },
        { word: "Namely", translation: "A savoir", example: "" },
        { word: "Narrow down", translation: "Réduire, préciser", example: "" },
        { word: "Neat", translation: "Soigné (apparence)", example: "" },
        { word: "Necessary evil", translation: "Un mal nécessaire", example: "vaccination is a necessary evil for long-distance travelers" },
        { word: "Needless to say", translation: "Inutile de dire", example: "" },
        { word: "Nefarious", translation: "Abominable", example: "" },
        { word: "Nigh on", translation: "Presque (almost)", example: "" },
        { word: "Nigh", translation: "Proche", example: "" },
        { word: "Nimble", translation: "Vif (d'esprit)", example: "" },
        { word: "No quick fix", translation: "Pas de solution simple", example: "for the current crisis there is no quick fix" },
        { word: "Notwithstanding", translation: "Nonobstant", example: "" },
        { word: "Noxious, harmful", translation: "Nocif", example: "" },
        { word: "Oddly enough", translation: "Assez curieusement", example: "" },
        { word: "Off kilter", translation: "Déjanté, de travers", example: "" },
        { word: "On behalf of", translation: "Au nom de", example: "" },
        { word: "On second thoughts", translation: "A bien y réfléchir", example: "" },
        { word: "Opponent, adversary", translation: "Opposant", example: "" },
        { word: "Ordeal", translation: "Une épreuve (difficile), un calvaire", example: "" },
        { word: "Ore", translation: "Minerai", example: "" },
        { word: "Oust", translation: "Virer", example: "" },
        { word: "Outcome", translation: "Résultat", example: "" },
        { word: "Outgrowth of sth", translation: "Un résultat de qch, une conséquence finale", example: "" },
        { word: "Outline", translation: "Plan", example: "" },
        { word: "Outperform", translation: "Réussir mieux", example: "" },
        { word: "Outspoken answer", translation: "Une réponse franche", example: "" },
        { word: "Outstanding", translation: "Remarquable", example: "" },
        { word: "Overhaul", translation: "Remanier", example: "" },
        { word: "Overloaded", translation: "Surchargé", example: "" },
        { word: "Overlook", translation: "Négliger, passer outre, ne pas voir que", example: "" },
        { word: "Paragon", translation: "Modèle", example: "" },
        { word: "Partake", translation: "Participer", example: "" },
        { word: "Pertain", translation: "Concerner", example: "" },
        { word: "Pitfall", translation: "A trap", example: "un piège" },
        { word: "Plague of", translation: "Fléau de", example: "" },
        { word: "Plagued by", translation: "Rongé par", example: "" },
        { word: "Play down sthg", translation: "Minimiser qqch", example: "" },
        { word: "Play up sthg", translation: "Insister sur qqch", example: "" },
        { word: "Pledge", translation: "Promettre", example: "" },
        { word: "Point out sthg", translation: "Souligner, mettre en avant qqch", example: "" },
        { word: "Pointlessness, uselessness", translation: "Inutilité", example: "" },
        { word: "Political hot potato", translation: "un sujet que les politiciens évitent", example: "" },
        { word: "Poll", translation: "Scructin", example: "" },
        { word: "Preposterous", translation: "Grotesque", example: "" },
        { word: "Pretence", translation: "Faux-semblant", example: "" },
        { word: "Previous, former", translation: "Ancien(ne), antérieur(e), vieux, vieille", example: "" },
        { word: "Problem at hand", translation: "Le problème précis", example: "" },
        { word: "Proclivity", translation: "Propension", example: "" },
        { word: "Proficient", translation: "Compétent", example: "" },
        { word: "Progress", translation: "Faire des progrès", example: "make some, much, little progress" },
        { word: "Prone to", translation: "Enclin à", example: "" },
        { word: "Proponent, advocate", translation: "Un partisan", example: "" },
        { word: "Prove one’s point", translation: "Prouver ce qu’on avance", example: "" },
        { word: "Pummel", translation: "Rouer de de coups", example: "" },
        { word: "Pun, play-on-words", translation: "Un jeu de mots", example: "" },
        { word: "Push the enveloppe", translation: "Exagérer", example: "" },
        { word: "Push through", translation: "Faire passer", example: "" },
        { word: "Put sthg forward", translation: "Mettre qqch en avant", example: "" },
        { word: "Puzzling", translation: "Déconcertant, déroutant", example: "" },
        { word: "Puzzling, odd", translation: "Curieux", example: "" },
        { word: "Qualify sthg", translation: "Nuancer qqch", example: "" },
        { word: "Quell", translation: "Réprimander", example: "" },
        { word: "Question somebody’s good faith", translation: "Mettre en doute la bonne foi de", example: "" },
        { word: "Question sthg", translation: "Remettre en cause qqch", example: "" },
        { word: "Quibble", translation: "Critiquer", example: "" },
        { word: "Raise an issue", translation: "Soulever une question", example: "" },
        { word: "Ramble", translation: "Partir en randonnée, radoter", example: "" },
        { word: "Rant", translation: "Diatribe", example: "" },
        { word: "Raw", translation: "Brut", example: "" },
        { word: "Reckless", translation: "Imprudent", example: "" },
        { word: "Reckon", translation: "Estimer", example: "" },
        { word: "Refrain from doing", translation: "S’abstenir de faire", example: "" },
        { word: "Relapse", translation: "Rechute", example: "" },
        { word: "Reluctance to do sth", translation: "Répugnance à faire qqch ,  rechigner à ", example: "" },
        { word: "Reluctant", translation: "Réticent", example: "" },
        { word: "Remit", translation: "Attribution", example: "" },
        { word: "Rephrase", translation: "Reformuler", example: "" },
        { word: "Require", translation: "Exiger,  nécessiter", example: "" },
        { word: "Result from", translation: "Avoir pour cause,  provenir de", example: "" },
        { word: "Result in", translation: "Avoir pour résultat,  aboutir à", example: "" },
        { word: "Retort", translation: "Rétorquer", example: "" },
        { word: "Riddance", translation: "Débarras", example: "" },
        { word: "Rise, increase", translation: "Une hausse, augmentation", example: "" },
        { word: "Run counter to", translation: "Aller à l’encontre de", example: "" },
        { word: "Scarcely", translation: "A peine", example: "" },
        { word: "Scathing (attack)", translation: "Faire l’objet d’une attaque virulente", example: "" },
        { word: "Scheme", translation: "Un plan", example: "" },
        { word: "Scold", translation: "Houspiller", example: "" },
        { word: "Sensitive issue", translation: "Une question sensible", example: "" },
        { word: "Shame", translation: "Culpabilité", example: "" },
        { word: "Shrewd", translation: "Malin", example: "" },
        { word: "Shroud, veil, conceal", translation: "Dissimuler", example: "" },
        { word: "Shrub", translation: "Arbuste", example: "" },
        { word: "Shun", translation: "Eviter", example: "" },
        { word: "Side-effects ,  knock-on effects", translation: "Effets secondaires", example: "" },
        { word: "Sight", translation: "Vue", example: "" },
        { word: "Simmer", translation: "Mijoter", example: "" },
        { word: "Skim", translation: "Parcourir rapidement", example: "" },
        { word: "Sluice", translation: "Drainer", example: "" },
        { word: "Smattering", translation: "De vague notions", example: "" },
        { word: "Snag", translation: "Hic", example: "" },
        { word: "Snicker", translation: "Ricaner", example: "" },
        { word: "Snide", translation: "Narquois", example: "" },
        { word: "Snippet", translation: "bout, extrait", example: "" },
        { word: "Solely", translation: "Seulement", example: "" },
        { word: "Spiral out of control", translation: "Devenir incontrôlable", example: "" },
        { word: "Split", translation: "Divisé(e)", example: "" },
        { word: "Spokesperson", translation: "Porte parole", example: "" },
        { word: "Spurious", translation: "Fallacieux", example: "" },
        { word: "Stagger", translation: "Sidérer", example: "" },
        { word: "Stance", translation: "Une prise de position", example: "" },
        { word: "Staple", translation: "De base", example: "" },
        { word: "Starkly", translation: "Extrêmement", example: "" },
        { word: "Startle", translation: "Surprendre", example: "" },
        { word: "State", translation: "Déclarer", example: "" },
        { word: "Steady", translation: "Constant", example: "" },
        { word: "Stem from", translation: "Provenir de", example: "" },
        { word: "Sticking point, stumbling block ", translation: "Pierre d’achoppement ", example: "" },
        { word: "Stir up", translation: "Susciter une polémique", example: "" },
        { word: "Stir", translation: "Mélanger", example: "" },
        { word: "Strew", translation: "Eparpillé", example: "" },
        { word: "Striking", translation: "Frappant", example: "" },
        { word: "Stringent", translation: "Rigoureux", example: "" },
        { word: "Strive", translation: "S’efforcer de ,  to do one’s utmost to", example: "" },
        { word: "Strive", translation: "S'efforcer", example: "" },
        { word: "Strut", translation: "Pavaner", example: "" },
        { word: "Stymie", translation: "Faire obstacle, contrecarrer", example: "" },
        { word: "Support", translation: "Etre en faveur de", example: "" },
        { word: "Suppose", translation: "Supposer", example: "" },
        { word: "Surge", translation: "Flot, hausse", example: "" },
        { word: "Surmised", translation: "Présumer", example: "" },
        { word: "Surprising as it may seem", translation: "Aussi surprenant que cela puisse paraître", example: "" },
        { word: "Surreptitiously", translation: "Subrepticement", example: "" },
        { word: "Survey", translation: "Une étude, une enquête", example: "" },
        { word: "Sway", translation: "Influence(r)", example: "" },
        { word: "Swerve", translation: "Faire une embardée", example: "" },
        { word: "Take a stance", translation: "Prendre position", example: "" },
        { word: "Take aim at someone, something", translation: "Viser quelqu’un, qqch", example: "" },
        { word: "Take side with,  to side with", translation: "Prendre parti pour", example: "" },
        { word: "Take side", translation: "Prendre parti", example: "" },
        { word: "Tattered", translation: "En piteux état", example: "" },
        { word: "Tedious", translation: "Ennuyeux", example: "" },
        { word: "Teetering", translation: "Vacillant", example: "" },
        { word: "Tend to", translation: "Avoir tendance à", example: "" },
        { word: "Terrific", translation: "Super, génial", example: "" },
        { word: "The shackles of", translation: "Les chaînes de", example: "" },
        { word: "There’s every reason to believe", translation: "Tout porte à croire", example: "" },
        { word: "There’s hardly any denying", translation: "On peut difficilement nier", example: "" },
        { word: "There’s the rub", translation: "C’est là que le bât blesse", example: "" },
        { word: "Thereby", translation: "Ainsi", example: "" },
        { word: "Therefore", translation: "Par conséquent", example: "" },
        { word: "Thereof", translation: "De celui-ci", example: "" },
        { word: "Things are looking up", translation: "Les choses s’améliorent", example: "" },
        { word: "Thoroughly", translation: "Minutieusement", example: "" },
        { word: "Thrive, flourish", translation: "Prospérer", example: "" },
        { word: "Throw in the towel", translation: "Admettre que l’on ne peut pas y arriver", example: "" },
        { word: "Thwart", translation: "Déjouer", example: "" },
        { word: "To cause a stir", translation: "Faire sensation", example: ""},
        { word: "To scratch the surface", translation: "To deal with only a small part of it", example: "" },
        { word: "To some extent", translation: "Dans une certaine mesure", example: "" },
        { word: "Toll", translation: "Bilan", example: "" },
        { word: "Trickle in", translation: "Arriver au compte goutte", example: "" },
        { word: "Trickle", translation: "Une poignée de", example: "" },
        { word: "Tricky ,  thorny questions", translation: "Questions épineuses", example: "" },
        { word: "Trifling", translation: "Insignifiant", example: "" },
        { word: "Trigger sthg", translation: "Déclencher qqch", example: "" },
        { word: "Trite", translation: "Banal", example: "" },
        { word: "Trying", translation: "éprouvant", example: "a trying person,  situation..." },
        { word: "Tunnel vision", translation: "Esprit étriqué", example: "" },
        { word: "Turmoil", translation: "Tumulte", example: "" },
        { word: "Undergo", translation: "Subir, traverser, connaître un temps de...", example: "" },
        { word: "Undermine", translation: "Saper, nuire à", example: "" },
        { word: "Undoubtedly", translation: "Il ne fait aucun doute que", example: "" },
        { word: "Uneven", translation: "Inégal, irréglier", example: "" },
        { word: "Unfold", translation: "Se dérouler", example: "" },
        { word: "Unheeded", translation: "Ignoré", example: "" },
        { word: "Unless I’m much mistaken", translation: "Sauf erreur de ma part", example: "" },
        { word: "Unlike, contrary to", translation: "A la différence de", example: "" },
        { word: "Unravel", translation: "Echouer, résoudre (un mystère)", example: "" },
        { word: "Unreliable", translation: "Peu sûr, non fiable", example: "" },
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
        { word: "Wreak", translation: "Causer", example: "" },
        { word: "Wreck", translation: "Epave, ruine, démolir", example: "" },
        { word: "Wrecked", translation: "Détruit", example: "" },
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
    { expression: "Cross the threshold", translation: "Franchir le seuil", example: "" }
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
    const numQuestions = parseInt(document.getElementById('numQuestions').value, 10);
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
        : `Quel est le mot pour : ${currentQuestion.translation}`;

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
    } else if (path === 'view.html') {
        viewVocabulary();
    } else if (path === 'expressions.html') {
        displayExpressions();
    } else if (path === 'citations.html') {
        displayCitations();
    }
});
