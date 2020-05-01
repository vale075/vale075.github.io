var userLang = navigator.language || navigator.userLanguage;
switch(userLang){
    case 'en-US':
        window.location.href = '/en';
        break;
    case 'fr-FR':
        window.location.href = '/fr';
        break;
    default:
        // if it's something else fall back to the default
        window.location.href = '/en';
        break;
}
