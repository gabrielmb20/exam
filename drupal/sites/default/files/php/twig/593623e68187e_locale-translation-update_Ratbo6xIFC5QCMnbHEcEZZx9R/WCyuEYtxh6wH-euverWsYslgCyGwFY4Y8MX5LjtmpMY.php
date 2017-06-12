<?php

/* core/modules/locale/templates/locale-translation-update-info.html.twig */
class __TwigTemplate_9a3304d7e257e0e786fac84d687770b79fb92fcccef52a7b2d660d4718876196 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $tags = array("if" => 20, "set" => 21, "trans" => 22, "for" => 36);
        $filters = array("safe_join" => 21, "length" => 27, "format_date" => 37, "t" => 47, "default" => 52);
        $functions = array();

        try {
            $this->env->getExtension('Twig_Extension_Sandbox')->checkSecurity(
                array('if', 'set', 'trans', 'for'),
                array('safe_join', 'length', 'format_date', 't', 'default'),
                array()
            );
        } catch (Twig_Sandbox_SecurityError $e) {
            $e->setSourceContext($this->getSourceContext());

            if ($e instanceof Twig_Sandbox_SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

        // line 18
        echo "<div class=\"locale-translation-update__wrapper\" tabindex=\"0\" role=\"button\">
  <span class=\"locale-translation-update__prefix visually-hidden\">Show description</span>
  ";
        // line 20
        if (($context["modules"] ?? null)) {
            // line 21
            echo "    ";
            $context["module_list"] = $this->env->getExtension('Drupal\Core\Template\TwigExtension')->safeJoin($this->env, ($context["modules"] ?? null), ", ");
            // line 22
            echo "    <span class=\"locale-translation-update__message\">";
            echo t("Updates for: @module_list", array("@module_list" => ($context["module_list"] ?? null), ));
            echo "</span>
  ";
        } elseif (        // line 23
($context["not_found"] ?? null)) {
            // line 24
            echo "    <span class=\"locale-translation-update__message\">";
            // line 25
            echo \Drupal::translation()->formatPlural(abs(twig_length_filter($this->env,             // line 27
($context["not_found"] ?? null))), "Missing translations for one project", "Missing translations for @count projects", array());
            // line 30
            echo "</span>
  ";
        }
        // line 32
        echo "  ";
        if ((($context["updates"] ?? null) || ($context["not_found"] ?? null))) {
            // line 33
            echo "    <div class=\"locale-translation-update__details\">
      ";
            // line 34
            if (($context["updates"] ?? null)) {
                // line 35
                echo "        <ul>
          ";
                // line 36
                $context['_parent'] = $context;
                $context['_seq'] = twig_ensure_traversable(($context["updates"] ?? null));
                foreach ($context['_seq'] as $context["_key"] => $context["update"]) {
                    // line 37
                    echo "            <li>";
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["update"], "name", array()), "html", null, true));
                    echo " (";
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, call_user_func_array($this->env->getFilter('format_date')->getCallable(), array($this->getAttribute($context["update"], "timestamp", array()), "html_date")), "html", null, true));
                    echo ")</li>
          ";
                }
                $_parent = $context['_parent'];
                unset($context['_seq'], $context['_iterated'], $context['_key'], $context['update'], $context['_parent'], $context['loop']);
                $context = array_intersect_key($context, $_parent) + $_parent;
                // line 39
                echo "        </ul>
      ";
            }
            // line 41
            echo "      ";
            if (($context["not_found"] ?? null)) {
                // line 42
                echo "        ";
                // line 46
                echo "        ";
                if (($context["updates"] ?? null)) {
                    // line 47
                    echo "          ";
                    echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar(t("Missing translations for:")));
                    echo "
        ";
                }
                // line 49
                echo "        ";
                if (($context["not_found"] ?? null)) {
                    // line 50
                    echo "          <ul>
            ";
                    // line 51
                    $context['_parent'] = $context;
                    $context['_seq'] = twig_ensure_traversable(($context["not_found"] ?? null));
                    foreach ($context['_seq'] as $context["_key"] => $context["update"]) {
                        // line 52
                        echo "              <li>";
                        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["update"], "name", array()), "html", null, true));
                        echo " (";
                        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, (($this->getAttribute($context["update"], "version", array(), "any", true, true)) ? (_twig_default_filter($this->getAttribute($context["update"], "version", array()), t("no version"))) : (t("no version"))), "html", null, true));
                        echo "). ";
                        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute($context["update"], "info", array()), "html", null, true));
                        echo "</li>
            ";
                    }
                    $_parent = $context['_parent'];
                    unset($context['_seq'], $context['_iterated'], $context['_key'], $context['update'], $context['_parent'], $context['loop']);
                    $context = array_intersect_key($context, $_parent) + $_parent;
                    // line 54
                    echo "          </ul>
        ";
                }
                // line 56
                echo "      ";
            }
            // line 57
            echo "    </div>
  ";
        }
        // line 59
        echo "</div>
";
    }

    public function getTemplateName()
    {
        return "core/modules/locale/templates/locale-translation-update-info.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  146 => 59,  142 => 57,  139 => 56,  135 => 54,  122 => 52,  118 => 51,  115 => 50,  112 => 49,  106 => 47,  103 => 46,  101 => 42,  98 => 41,  94 => 39,  83 => 37,  79 => 36,  76 => 35,  74 => 34,  71 => 33,  68 => 32,  64 => 30,  62 => 27,  61 => 25,  59 => 24,  57 => 23,  52 => 22,  49 => 21,  47 => 20,  43 => 18,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "core/modules/locale/templates/locale-translation-update-info.html.twig", "/var/www/html/alpha/114520031/exam/drupal/core/modules/locale/templates/locale-translation-update-info.html.twig");
    }
}
