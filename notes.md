# Nawigacja natywna (push)
npm install @react-navigation/native
npm install react-native-screens react-native-safe-area-context
npm install @react-navigation/native-stack
npx pod-install

# Nawigacja oparta o zakładki
npm install @react-navigation/bottom-tabs
npx pod-install

# Ikony / obsługa svg
npm install react-native-heroicons
npm install react-native-svg
npx pod-install

# Klient HTTP
npm install axios

# Redux
npm install react-redux
npm install @reduxjs/toolkit

#

Aplikacja pokazująca pogodę
Główna nawigacja oparta jest o taby
a) Ekran 1 - pogoda (ładowana z sieci, loading view) na aktualny dzień + lista z ogólnymi informacjami na kolejne dni
b) Ekran 2 - po wybraniu elementu listy (ekran 1) pokazujemy szczegóły związane z pogodę (nawigacja)
c) Ekran 3 - ustawienia - ilość dni, jednostki, miasto (Context)
