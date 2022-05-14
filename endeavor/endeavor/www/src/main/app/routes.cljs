
(ns app.routes
  (:require [reagent.core :as r]
            [app.main :as main]
            ["react-router-dom" :refer (Route) :rename {BrowserRouter Router}]
            ))

(defn get-react-component [reagent-component]
  (r/reactify-component reagent-component))

(defn root []
  [:> Router
   [:> Route {:path "/" :exact true :component (get-react-component main/home)}]])

