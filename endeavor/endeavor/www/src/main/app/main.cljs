(ns app.main
  (:require [reagent.core :as r]
            [wscljs.client :as ws]))

(def handlers {:on-message (fn [e] (prn (.-data e)))
               :on-open    #(prn "Opening a new connection")
               :on-close   #(prn "Closing a connection")})

(def socket (ws/create "ws://localhost:8080/api/wss" handlers))

(defn chatlog [welcome]
  (let [state (r/atom (cons welcome '()))
        socket socket]
    ;;(js/console.log state)
    [:div ]
    )
  )

(defn the-kingdom []
  [:h1 "The Kingdom"])

(defn the-foundation []
  [:div
   [:h1 "The Waiting Room"]
   [chatlog {:text "Welcome message"}]])

(defn home []
  [the-foundation])


