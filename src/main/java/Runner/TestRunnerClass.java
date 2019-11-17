package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

//features -> path of feature files
//glue - > path of stepdef files
//monochrome = true - > generates console output in readable form



@RunWith(Cucumber.class)
@CucumberOptions(
		features="C:\\Users\\Anmol Aggarwal\\eclipse-workspace\\NaveenAutomationLabs\\AutomationUsingCucumber\\src\\main\\java\\FeatureFiles\\StudentsPage.feature"
		,glue= {"StepDefinitions"}
		,dryRun= false
		,monochrome = true
		,plugin = {"pretty" , "json:Test_Output_Report/cucumber.json","html:Test_Output_Report/cucumber_report.html"} 
		,tags= {"@smoketest" , "@regression"}
		)

public class TestRunnerClass 
{

}
