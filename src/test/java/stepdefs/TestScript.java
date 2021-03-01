package stepdefs;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class TestScript {

public static WebDriver driver;
	
	@Given("Browser is opened")
    public void browser_is_opened() {
         WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        driver.manage().deleteAllCookies();
    }
	
	@When("user is navigated to homepage")
    public void user_is_navigated_to_homepage() throws InterruptedException {
        driver.get("https://www.homes.com");    
    }
	
	@Then("user search a location")
	public void user_search_location() throws InterruptedException {
		WebElement element= driver.findElement(By.xpath("//input[@data-testid='HP-SearchInput']"));
		element.click();
		element.sendKeys("Norfolk");
		
	 driver.findElement(By.xpath("//*[@id=\"HP-Norfolk, VA__0\"]")).click();
	}
	
	@Then("user naviagted to SRP")
	public void verify_SRP_title() throws InterruptedException {
		String Srp_title= driver.getTitle();
		Thread.sleep(2000);
		Assert.assertEquals(Srp_title, "Homes.com - Homes for Sale, Homes for Rent and Real Estate Listings");
	}
	
	@Then("user click on any listing card")
	public void click_listingcard() {
		List<WebElement> list = driver.findElements(By.tagName("article"));
		System.out.println(list.size());
		list.get(0).click();
	}
	
	@Then("user navigated to LDP")
	public void verify_LDP() throws InterruptedException {
		Thread.sleep(2000);
		WebElement element = driver.findElement(By.xpath("//div[@class='page__inner listing-details__inner']"));
		Assert.assertTrue(element.isDisplayed());
	}
	
	@Then("Click on saved search button")
	public void click_saved_search_CTA() throws InterruptedException {
		Thread.sleep(2000);
		driver.findElement(By.xpath("//div[@class='filter-bar__select-filters-lockup grid-cell grid']")).click();
	}
	
	@And("login pop appears")
		public void verify_login_popup() {
		WebElement element = driver.findElement(By.xpath("//div[@class='login-manager login-manager--login grid']"));
		Assert.assertTrue(element.isDisplayed());
	}
	
	@Then("enter username and password in the input fields and click login CTA")
	public void user_Login() throws InterruptedException {
		driver.findElement(By.xpath("//input[@id='login-email']")).sendKeys("ritika1234@homes.com");
		Thread.sleep(2000);
		driver.findElement(By.xpath("//input[@id='login-password']")).click();
		Thread.sleep(1000);
		driver.findElement(By.xpath("//input[@id='login-password']")).sendKeys("ritika1234");
		driver.findElement(By.xpath("//div[@class='button-cta pl-4 button-cta--icon-arrow-forward-long icon--arrow-forward-long button-cta--animate-icon button-cta--form button-cta--form-proceed']")).click();
		Thread.sleep(2000);
		driver.findElement(By.xpath("//button[@aria-label='Close login modal']")).click();	
	}
	
	@Then("Enter any name in saved search field click save search CTA")
	public void enter_savedsearch_name() throws InterruptedException {
		Thread.sleep(2000);
		driver.findElement(By.xpath("//div[@class='filter-bar__select-filters-lockup grid-cell grid']")).click();
		driver.findElement(By.xpath("//input[@class='save-search__input font-color-white']")).sendKeys("RitikaMishra");
		driver.findElement(By.xpath("//span[@class='button-cta__label mx-auto font-size-s has-icon']")).sendKeys("RitikaMishra");
	}
	
	@Then("Browser is closed")
	public void Browser_closed() {
		driver.quit();
		
	}
}
