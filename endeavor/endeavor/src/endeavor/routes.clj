(ns endeavor.routes
  (:use [compojure.core :only [defroutes GET POST DELETE ANY context]]
        (ring.middleware [keyword-params :only [wrap-keyword-params]]
                         [params :only [wrap-params]]
                         [session :only [wrap-session]])
        [endeavor.middleware :only [wrap-failsafe wrap-request-logging-in-dev
                                    wrap-reload-in-dev JGET JPUT JPOST JDELETE]]
        org.httpkit.server
        )
  (:require [endeavor.handlers.app :as app]
            [endeavor.handlers.api :as api]
            [compojure.route :as route]))


(defn chat-handler [request]
  (if-not (:websocket? request)
    {:status 200 :body "Welcome to the chatroom! JS client connecting..."}
    (org.httpkit.server/as-channel request
                {:on-receive (fn [ch message] (println "on-receive:" message))
                 :on-close   (fn [ch status]  (println "on-close:"   status))
                 :on-open    (fn [ch]         (println "on-open:"    ch))})))

;; define mapping here
(defroutes server-routes*
  (GET "/" [] app/show-landing)
  (context "/api" [request]
           ;; JGET returns json encoding of the response
           (JGET "/time" [] api/get-time)
           ;;(JGET "/socket" [] chat-handler)
           (GET "/wss" [] chat-handler))
  ;; static files under ./public folder, prefix /static
  ;; like /static/css/style.css
  (route/files "/static")
  ;; 404, modify for a better 404 page
  (route/not-found "<p>Page not found.</p>" ))

(defn app [] (-> #'server-routes*
                 wrap-session
                 wrap-keyword-params
                 wrap-params
                 wrap-request-logging-in-dev
                 wrap-reload-in-dev
                 wrap-failsafe))
