(defproject endeavor "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :main endeavor.main
  :aot [endeavor.main]
  :uberjar-name "endeavor-standalone.jar"
  ;; :plugins [[lein-swank "1.4.4"]]
  :dependencies [[org.clojure/clojure "1.11.1"]
                 [org.clojure/tools.cli "0.2.2"]
                 [compojure "1.1.5"]
                 [ring "1.5.0"]
                 [javax.xml.bind/jaxb-api "2.3.0"]

                 [org.clojure/data.json "0.2.1"]

                 [http-kit "2.6.0-alpha1"]

                 [http-kit/dbcp "0.1.0"] ;; database access

                 [mysql/mysql-connector-java "5.1.21"] ;; mysql jdbc driver

                 ;; [org.fressian/fressian "0.6.3"]

                 ;; for serialization clojure object to bytes
                 ;; [com.taoensso/nippy "1.1.0"]

                 ;; Redis client & message queue
                 ;; [com.taoensso/carmine "1.5.0"]

                 ;; logging,  another option [com.taoensso/timbre "1.5.2"]
                 [org.clojure/tools.logging "0.2.6"]
                 [ch.qos.logback/logback-classic "1.0.1"]
                 [cider/cider-nrepl "0.28.3"]
                 ;; template
                 [me.shenfeng/mustache "1.1"]])
